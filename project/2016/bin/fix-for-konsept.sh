#!/bin/sh

cd build
perl -pi -e 's/href="\//href="\/glasspaper\//gm' `find . -name "*.html"`
perl -pi -e 's/src="\//src="\/glasspaper\//gm' `find . -name "*.html"`
perl -pi -e 's/url\(\//url\(\/glasspaper\//gm' `find . -name "*.html"`
perl -pi -e 's/url\("\//url\("\/glasspaper\//gm' `find . -name "*.html"`
perl -pi -e 's/srcset="\//srcset="\/glasspaper\//gm' `find . -name "*.html"`
perl -pi -e 's/\ \/img\//\ \/glasspaper\/img\//gm' `find . -name "*.html"`

perl -pi -e 's/href="\//href="\/glasspaper\//gm' `find . -name "*.js"`
perl -pi -e 's/src="\//src="\/glasspaper\//gm' `find . -name "*.js"`
perl -pi -e 's/=\ "\/img\//=\ "\/glasspaper\/img\//gm' `find . -name "*.js"`

perl -pi -e 's/url\(\//url\(\/glasspaper\//gm' `find . -name "*.css"`
perl -pi -e 's/url\("\//url\("\/glasspaper\//gm' `find . -name "*.css"`

perl -pi -e 's/data-image="\//data-image="\/glasspaper\//gm' `find . -name "*.html"`
perl -pi -e 's/\.no\/img/\.no\/glasspaper\/img/gm' `find . -name "*.html"`
