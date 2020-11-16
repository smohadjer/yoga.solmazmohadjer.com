#!/bin/bash
nodePath=$(which node)
echo $nodePath
echo '<?php $pathToNodejs = "'$nodePath'" ?>'  > app/nodejsPath.php
