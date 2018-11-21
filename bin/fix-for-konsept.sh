#!/bin/sh

cd dist
perl -pi -e 's/href="\//href="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/action="\//action="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/src="\//src="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/url\(\//url\(\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/url\("\//url\("\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/srcset="\//srcset="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/\ \/img\//\ \/jus\/img\//gm' `find . -name "*.html"`

perl -pi -e 's/href="\//href="\/jus\//gm' `find . -name "*.js"`
perl -pi -e 's/src="\//src="\/jus\//gm' `find . -name "*.js"`
perl -pi -e 's/=\ "\/img\//=\ "\/jus\/img\//gm' `find . -name "*.js"`

perl -pi -e 's/url\(\//url\(\/jus\//gm' `find . -name "*.css"`
perl -pi -e 's/url\("\//url\("\/jus\//gm' `find . -name "*.css"`

perl -pi -e 's/data-image="\//data-image="\/jus\//gm' `find . -name "*.html"`
perl -pi -e 's/\.no\/img/\.no\/jus\/img/gm' `find . -name "*.html"`
cd -
