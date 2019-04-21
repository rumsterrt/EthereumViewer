import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledTableGrid, StyledTable } from './styled'
import Header from './header'
import Row from './row'
import AutoSizer from 'react-virtualized-auto-sizer'

import InfiniteScroller from 'react-infinite-scroller'

class TableWrapper extends Component {
    static = {
        headers: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                sort: PropTypes.string,
            }),
        ),
        data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.element)),
    }
    loadMore = () => {
        const { loadMore, loadData } = this.props
        console.log('loadMore')

        if (!loadData.hasMore) {
            return
        }

        loadMore()
    }
    render() {
        const { headers, data, loadData } = this.props

        return (
            <AutoSizer>
                {({ width, height }) => (
                    <StyledTable height={height} width={width}>
                        <Header headers={headers} height={60} />
                        <StyledTableGrid ref={ref => (this.scrollParentRef = ref)}>
                            <InfiniteScroller
                                pageStart={0}
                                loader={null}
                                hasMore={loadData.hasMore && !loadData.isLoading}
                                loadMore={this.loadMore}
                                useWindow={false}
                                getScrollParent={() => this.scrollParentRef}
                            >
                                {data.map((item, index) => (
                                    <Row key={index} headers={headers} data={item} />
                                ))}
                            </InfiniteScroller>
                        </StyledTableGrid>
                    </StyledTable>
                )}
            </AutoSizer>
        )
    }
}

export default TableWrapper
