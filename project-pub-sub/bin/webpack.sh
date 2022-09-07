#!/bin/bash
declare -a services=("protos")
for SERVICE in "${services[@]}"; do
    echo $SERVICE
    cd $SERVICE
    for FILE in *; do
        filename=$FILE
        search="protos\/"
        replace=""
        sed -i'.bak' -e "1,8 s/$search/$replace/gi" $filename
        rm -f *.bak
        echo "[webezy-script] Compiling -> "$filename
        sudo protoc -I=../protos $filename  --js_out=import_style=commonjs,binary:../clients/webpack   --grpc-web_out=import_style=typescript,mode=grpcweb:../clients/webpack
    done
done
