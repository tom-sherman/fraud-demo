const CasePage = ({ id }) => <span>{id}</span>

CasePage.getInitialProps = async ({ query }) => ({ id: query.id })

export default CasePage
