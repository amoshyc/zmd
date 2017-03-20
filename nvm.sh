#!/bin/bash

curpath=`pwd`
echo $curpath
npmpath=`find $curpath -name .bin | head -n 1`
cd $npmpath/../../
export PATH="$PATH:$npmpath"
exec gnome-terminal
