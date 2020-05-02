var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  layout: {
    name: 'dagre',
    rankDir: 'LR'
  },

  style: [
    {
      'selector': 'node',
      style: {
        'label': 'data(name)',
        'text-valign': 'bottom',
        'background-fit': 'cover',
        'font-size': '14px',
        'width': 50,
        'height': 50
      },
    },
    {
      'selector': 'edge',
      style: {
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  elements: fetch('http://localhost:8000/graph_data/threeWays.json')
              .then(resp => resp.json())
}); // cy init
