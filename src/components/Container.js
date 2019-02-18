import styled from 'styled-components'
import { Box } from '@rebass/grid'

const Container = styled(Box)`
  max-width: 900px;
`
Container.defaultProps = {
  mx: 'auto',
  px: 10
}

export default Container;
