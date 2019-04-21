import React, { Component } from 'react'
import InfiniteScroller from 'react-infinite-scroller'
import { Loader } from 'components/loader'
import styled from 'styled-components'

const StyledContainer = styled.div`
  overflow-y: scroll;
  height: ${props => props.height || 'auto'};
`

class InfiniteScroll extends Component {
  handleInfiniteLoad = () => {
    const { loading, hasMore, nodes, loadMore } = this.props

    if (!nodes || loading || !hasMore) {
      return
    }

    loadMore()
  }

  render() {
    const {
      className,
      loading,
      error,
      nodes,
      hasMore,
      render,
      isReverse,
      useWindow,
      height,
      initialLoad = false,
    } = this.props

    if (error) {
      return null
    }

    return (
      <StyledContainer height={height} ref={ref => (this.scrollParentRef = ref)}>
        <div>
          <InfiniteScroller
            className={className}
            initialLoad={initialLoad}
            loader={null}
            hasMore={hasMore && !loading}
            loadMore={this.handleInfiniteLoad}
            useWindow={useWindow}
            isReverse={isReverse}
          >
            {isReverse && loading && <Loader widthPercent={10} />}
            {nodes.map(item => render(item))}
            {!isReverse && loading && <Loader widthPercent={10} />}
          </InfiniteScroller>
        </div>
      </StyledContainer>
    )
  }
}

export default InfiniteScroll
