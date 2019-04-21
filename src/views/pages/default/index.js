import React, { useEffect } from 'react'
import { UserAvatar } from 'components/avatar'
import { H3, H2 } from 'components/global'
import { connect } from 'react-redux'
import { InfiniteList } from 'components/list'
import { RepoCard } from '../repositories/components'
import { getUserRepos } from 'actions/user'
import qs from 'qs'
import UserSearch from 'views/userSearch'

const DefaultPage = props => {
  const {
    info,
    repos: { totalItems, items, id },
    fetchData,
  } = props

  const handleLoadMore = () => {
    if (!id || !totalItems) {
      return
    }

    fetchData({ id, page: parseInt(items.length / 30 + 1) })
  }

  return (
    <div>
      <UserSearch />
      <H2>Info</H2>
      <H3>{info.name || info.login || 'Noname'}</H3>
      <UserAvatar src={info.avatar_url} />
      <H3>Repos</H3>
      {totalItems && id && (
        <InfiniteList
          height="400px"
          initialLoad={true}
          loadMore={handleLoadMore}
          hasMore={items.length < totalItems}
          nodes={items}
          render={props => <RepoCard key={props.id} {...props} />}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    info: state.user.info,
    repos: {
      totalItems: state.user.totalRepos || 0,
      items: state.user.repositories || [],
      id: state.user.id,
    },
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: ({ id, page }) => dispatch(getUserRepos({ id, page })),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage)
