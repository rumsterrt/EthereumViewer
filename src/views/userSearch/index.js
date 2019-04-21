import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Select from 'components/Select'
import { sendRequest } from 'utils/api'
import { setCurrentUser } from 'actions/user'
import { FlexRow } from 'components/global'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

const types = [
  {
    label: 'All',
    value: null,
  },
  {
    label: 'Organisation',
    value: 'org',
  },
  {
    label: 'User',
    value: 'user',
  },
]

const sorts = [
  {
    label: 'Best match',
    value: null,
  },
  {
    label: 'Most followers',
    value: 'sort:followers',
  },
  {
    label: 'Fewest followers',
    value: 'sort:followers order:asc',
  },
  {
    label: 'Most recently joined',
    value: 'sort:joined',
  },
  {
    label: 'Least recently joined',
    value: 'sort:joined order:asc',
  },
  {
    label: 'Most repositories',
    value: 'sort:repositories',
  },
  {
    label: 'Fewest repositories',
    value: 'sort:repositories order:asc',
  },
]

const Repositories = props => {
  const [type, setType] = useState(types[0])
  const [sort, setSort] = useState(sorts[0])
  const { fetchData, history, location, user } = props

  useEffect(() => {
    const { userId } = qs.parse(location.search, { ignoreQueryPrefix: true }) || {}
    console.log('userId', userId)
    if (!userId) {
      return
    }
    fetchData(userId)
  }, [location])

  return (
    <FlexRow>
      <div style={{ width: '300px', flex: '0 0 300px' }}>
        <Select isClearable={false} options={types} value={type} onChange={selected => setType(selected)} />
      </div>
      <div style={{ flex: '1 1 100%' }}>
        <Select
          async
          placeholder="Start input username"
          loadOptions={userInput =>
            sendRequest({
              method: 'get',
              endpoint: `/search/users?q=${type.value ? `type:${type.value}` : ''} ${
                sort.value ? sort.value : ''
              } ${userInput}`,
            }).then(response => {
              return response.data.items.map(user => ({
                label: user.login,
                value: user.id,
              }))
            })
          }
          noIndicate
          onChange={event => {
            const prevParams = qs.parse(location.search, { ignoreQueryPrefix: true })
            history.push({
              search: qs.stringify({
                ...prevParams,
                userId: event.label,
              }),
            })
          }}
          defaultValue={user && user.name}
        />
      </div>
      <div style={{ width: '300px', flex: '0 0 300px' }}>
        <Select name="Sort" isClearable={false} options={sorts} value={sort} onChange={selected => setSort(selected)} />
      </div>
    </FlexRow>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: username => dispatch(setCurrentUser({ username })),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Repositories))
