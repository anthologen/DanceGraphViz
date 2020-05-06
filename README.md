# DanceGraphViz
A collection of simple dance graphs I whipped up using cytoscape.js.

## Instructions to draw the graphs
1. Clone this repository using `git clone --recurse-submodules <url>`.
1. Run `npm install` to install dependencies.
1. Run `./start_server.sh` to start serving the *images* and *graph_data* folder on localhost.
1. Open one of the HTML files in a web browser.
1. Manually position the nodes in the graph as you see fit or experiment with the node layouts.

The local HTTP server is necessary because [cytoscape.js can't load images from local file paths](https://github.com/cytoscape/cytoscape.js/issues/1928).

Examples of drawn graphs can be viewed in [this blog post about dance graphs](https://anthologen.com/2020/05/06/a-finite-state-dance-machine/).
