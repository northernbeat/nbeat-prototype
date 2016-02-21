#!/bin/sh

cd build
perl -pi -e 's/href="\//href="\/larvik\//gm' `find . -name "*.html"`
perl -pi -e 's/src="\//src="\/larvik\//gm' `find . -name "*.html"`
perl -pi -e 's/url\(\//url\(\/larvik\//gm' `find . -name "*.html"`
perl -pi -e 's/url\("\//url\("\/larvik\//gm' `find . -name "*.html"`
perl -pi -e 's/srcset="\//srcset="\/larvik\//gm' `find . -name "*.html"`
perl -pi -e 's/\ \/img\//\ \/larvik\/img\//gm' `find . -name "*.html"`

perl -pi -e 's/href="\//href="\/larvik\//gm' `find . -name "*.js"`
perl -pi -e 's/src="\//src="\/larvik\//gm' `find . -name "*.js"`
perl -pi -e 's/=\ "\/img\//=\ "\/larvik\/img\//gm' `find . -name "*.js"`

perl -pi -e 's/url\(\//url\(\/larvik\//gm' `find . -name "*.css"`
perl -pi -e 's/url\("\//url\("\/larvik\//gm' `find . -name "*.css"`

perl -pi -e 's/data-image="\//data-image="\/larvik\//gm' `find . -name "*.html"`
perl -pi -e 's/\.no\/img/\.no\/larvik\/img/gm' `find . -name "*.html"`
