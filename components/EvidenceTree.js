import { Tree } from 'antd'
import { useState, useEffect, Component } from 'react'

const { TreeNode } = Tree

export class EvidenceTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      treeData: [
        {
          title: props.decision,
          key: '0',
          factID:
            'WA:RF:b53fc22b90a489f0065e2e9f7beb4357456fc8b32ad5d34a2f61239d84baf1a6'
        }
      ]
    }
  }

  onLoadData = async treeNode => {
    if (treeNode.props.children) {
      return
    }
    const result = await fetch(
      `https://enterprise-api.rainbird.ai/analysis/evidence/${
        treeNode.props.factID
      }`
    ).then(res => res.json())

    if (!result || !result.rule) {
      return
    }

    treeNode.props.dataRef.children = result.rule.conditions.map(
      (condition, i) => ({
        title: condition.alt,
        key: `${treeNode.props.eventKey}-${i}`,
        factID: condition.factID,
        disabled: condition.certainty === 0,
        isLeaf:
          condition.certainty === 0 || typeof condition.expression === 'object'
      })
    )

    this.setState({
      treeData: [...this.state.treeData]
    })
  }

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        const { children, ...rest } = item
        return <TreeNode {...rest}>{this.renderTreeNodes(children)}</TreeNode>
      }
      return <TreeNode {...item} dataRef={item} />
    })

  render() {
    return (
      <Tree loadData={this.onLoadData}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    )
  }
}
