#!/bin/sh

cd build
perl -pi -e 's/href="\//href="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/src="\//src="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/href="\//href="\/jus\//gm' `find . -name "*.js"`
perl -pi -e 's/src="\//src="\/jus\//gm' `find . -name "*.js"`

perl -pi -e 's/url\(\"\//url\(\"\/jus\//gm' `find . -name "*.css"`
