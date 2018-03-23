// Regular CSS config
// module.exports = {
//   type: 'react-app',
//   babel: {
//     plugins: [
//       ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}]
//     ]
//   }
// }

// Less config (with nwb-less installed)
module.exports = {
  type: 'react-app',
  babel: {
    plugins: [
      ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]
    ]
  },
  webpack: {
    rules: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1DA57A'
        }
      }
    }
  }
}
