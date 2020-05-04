var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: [
    {
      'selector': 'node',
      style: {
        'label': 'data(name)',
        'text-valign': 'bottom',
        'background-image': 'data(image)',
        'background-height': '75%',
        'background-width': '75%',
        'background-color': 'white',
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

  elements: fetch('http://localhost:8000/graph_data/sequenceOne.json')
              .then(resp => resp.json())
}); // cy init
