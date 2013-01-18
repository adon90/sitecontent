#!/bin/bash
rsync -ave ssh /home/tcolar/DEV/projects/sitecontent/ fantom@www.colar.net:/data/fantomato/sitecontent/ --exclude .hg/
