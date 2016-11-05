{
  "targets": [
    {
      "target_name": "calculator",
      "sources": [ "calculator_node.cc" ],
      "cflags": ["-Wall", "-std=c++11"],
      'xcode_settings': {
        'OTHER_CFLAGS': [
          '-std=c++11'
        ],
      },
    }
  ]
}
