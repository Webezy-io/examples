#!/bin/bash
NUM_IMPORTS=${1:-8}
declare -a services=("protos")
echo "[webezy-script] ---> Init started for proto files"
PWD = pwd
DESTDIR=$PWD"/services/generated"
mkdir $DESTDIR
touch $DESTDIR"/__init__.py"
npm i --save
for SERVICE in "${services[@]}"; do
    echo $SERVICE
    if [[ $SERVICE == *"v"* ]]
    then
        DESTDIR=$PWD"/services/generated/"$SERVICE
        echo $DESTDIR
        mkdir $DESTDIR
        touch $DESTDIR"/__init__.py"
        cd protos/$SERVICE
    else
        cd $SERVICE
        echo "Dir is not a package."
    fi
    for FILE in *; do
        filename=$FILE
        search="protos\/"
        replace=""
        sed -i'.bak' -e "1,$NUM_IMPORTS s/$search/$replace/gi" $filename
        rm -f *.bak
    done
    cd ..
    # mkdir -p $DESTDIR
    echo "[webezy-script] ---> compiling dir "$SERVICE
    echo "[webezy-script] ---> generating models for Typescript"
    npm run build
    echo "[webezy-script] ---> generating models for Python"
    python3 -m grpc_tools.protoc         --proto_path=$SERVICE/         --python_out=$DESTDIR         --grpc_python_out=$DESTDIR         $SERVICE/*.proto
done
statuscode=$?
echo "[webezy-script] ---> Exit code for protoc -> "$statuscode
cd $DESTDIR
for FILE in *; do
    if [[ $FILE == *".py"* ]]
    then
        filename=$FILE
        search="import"
        replace="from . import"
        sed -i'.bak' -e "4,20s/^$search/$replace/gi" $filename
        rm -f *.bak
    fi
done
CURRENT_DIR=pwd
if [[ $CURRENT_DIR == *"v1"* ]]
then
    cd ../../../protos
else
    cd ../../protos
fi
for FILE in *; do
    filename=$FILE
    search="import \""
    replace="import \"protos\/"
    sed -i'.bak' -e "1,$NUM_IMPORTS s/$search/$replace/gi" $filename
    rm -f *.bak
    search="protos\/google"
    replace="google"
    sed -i'.bak' -e "1,$NUM_IMPORTS s/$search/$replace/gi" $filename
    rm -f *.bak
done
cd ..
mkdir ./clients/python/generated
cp -R ./services/generated/*.py ./clients/python/generated