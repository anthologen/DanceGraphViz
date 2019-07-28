var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  layout: {
    name: 'grid'
  },

  style: [
    {
      'selector': 'node',
      style: {
        label: 'data(name)',
        'text-valign': 'bottom',
        'background-fit': 'cover'
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

  elements: fetch('http://localhost:8000/simpleMoveListData.json')
              .then(resp => resp.json())
}); // cy init
