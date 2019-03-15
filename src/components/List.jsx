import React from 'react'

// HOC

export const List = (itemName, keyFn) =>
  (ItemComponent) =>
    ({ collection }) => (<div>
      <ol>{collection.map((e) => {
        const props = { [itemName]: e }
        // the props variable allows to dynamize what is the key expected by the wrapped component
        // the {...props} allows to pass the entire content of the object onto the component, as props
        // (here it's just one prop, but could be a lot more, also could spread multiple objects this way, e.g. `{...propsA} {...propsB}`)
        return <li key={e.id}>
          <ItemComponent {...props} />
        </li>
      })}</ol>
    </div>)
