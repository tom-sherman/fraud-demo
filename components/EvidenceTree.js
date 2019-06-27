import { Tree } from 'antd'
import { Component } from 'react'

const { TreeNode } = Tree

export class EvidenceTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      treeData: [
        {
          title: props.decision,
          key: '0',
          factId: props.factId
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
        treeNode.props.factId
      }`
    ).then(res => res.json())

    if (!result || !result.source) {
      return
    }

    if (result.source === 'rule') {
      treeNode.props.dataRef.children = result.rule.conditions.map(
        (condition, i) => ({
          title: `${condition.certainty ? `[${condition.certainty}%]` : ''} ${
            condition.alt
          }`,
          key: `${treeNode.props.eventKey}-${i}`,
          factId: condition.factID,
          disabled: condition.certainty === 0,
          isLeaf:
            condition.certainty === 0 ||
            typeof condition.expression === 'object'
        })
      )
    } else {
      const SOURCE_TITLE_TABLE = {
        injection: 'Fact obtained from data',
        datasource: 'Fact obtained from Google Maps API',
        km: 'Fact stored in Knowledge map'
      }

      treeNode.props.dataRef.children = [
        {
          title: SOURCE_TITLE_TABLE[result.source],
          isLeaf: true,
          key: treeNode.props.eventKey + '-0'
        }
      ]
    }

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
