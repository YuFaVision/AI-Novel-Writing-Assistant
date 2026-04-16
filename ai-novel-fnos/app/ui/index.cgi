#!/bin/bash

# 获取请求路径
REQUEST_PATH=$PATH_INFO

# 如果请求路径为空，默认返回index.html
if [ -z "$REQUEST_PATH" ] || [ "$REQUEST_PATH" == "/" ]; then
    REQUEST_PATH="/index.html"
fi

# 静态文件目录
STATIC_DIR="$(dirname "$0")/www"

# 构建完整的文件路径
FILE_PATH="$STATIC_DIR$REQUEST_PATH"

# 检查文件是否存在
if [ -f "$FILE_PATH" ]; then
    # 根据文件类型设置Content-Type
    case "$FILE_PATH" in
        *.html)
            echo "Content-Type: text/html"
            ;;
        *.css)
            echo "Content-Type: text/css"
            ;;
        *.js)
            echo "Content-Type: application/javascript"
            ;;
        *.png)
            echo "Content-Type: image/png"
            ;;
        *.jpg|*.jpeg)
            echo "Content-Type: image/jpeg"
            ;;
        *.svg)
            echo "Content-Type: image/svg+xml"
            ;;
        *)
            echo "Content-Type: application/octet-stream"
            ;;
    esac
    
    echo ""
    cat "$FILE_PATH"
else
    # 文件不存在，返回404
    echo "Content-Type: text/html"
    echo ""
    echo "<html><body><h1>404 Not Found</h1></body></html>"
fi