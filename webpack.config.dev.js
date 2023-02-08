const srcPath = "/dodo-app/public.join(__dirname, '..', 'public')"

const rules = []

const includePaths = [
  srcPath
]
    // handle images
    rules.push({
      test: /\.(png|gif|jpe?g|svg|ico)$/,
      include: includePaths,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name]-[hash].[ext]'
        }
      }
    ]
  })