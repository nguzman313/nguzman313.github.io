(function(document) {
  var nodes = new vis.DataSet([
    { id: "mark_bickhard", label: "Mark Bickhard", title: "Click on me to read more!"
    },
    { id: "interactivism", label: "Interactivism", title: "Click on me to read more!" 
    },
    { id: "FIAICS", label: "FIAICS", title:
    "Click on me to read more!"
    },
    { id: "encodingism", label: "Encodingism", title:
    "Click on me to read more!"
    },
    { id: "false_sol", label: "False Solutions to Encodingism", title:
    "Click on me to read more!"   
    },
    { id: "rl", label: "Reinforcement Learning", title:
    "Click on me to read more!"   
    },
    { id: "neuroscience", label: "Neuroscience", title:
    "Click on me to read more!"
    },
    { id: "dopamine", label: "Dopamine & Reward Prediction Error", title:
    "Click on me to read more!"
    },
    { id: "w_freeman", label: "Walter Freeman, III", title:
    "Click on me to read more!"
    },
    { id: "edelman", label: "Gerald Edelman", title:
    "Click on me to read more!"
    },
    { id: "eco_psych", label: "Ecological Psychology", title:
    "Click on me to read more!"
    },
    { id: "jj_gibson", label: "James J. Gibson", title:
    "Click on me to read more!"
    },
    { id: "m_turvey", label: "Michael Turvey", title:
    "Click on me to read more!"
    },
    { id: "ai", label: "Artifical Intelligence", title:
    "Click on me to read more!"
    }
  ]);


  // create an array with edges
  var edges = new vis.DataSet([
    { from: "interactivism", to: "mark_bickhard" },
    { from: "mark_bickhard", to: "FIAICS" },
    { from: "mark_bickhard", to: "encodingism"},
    { from: "FIAICS", to: "false_sol"},
    { from: "false_sol", to: "rl"},
    { from: "ai", to: "rl"},
    { from: "neuroscience", to: "w_freeman" },
    { from: "neuroscience", to: "edelman" },
    { from: "neuroscience", to: "dopamine" },
    { from: "rl", to: "dopamine"},
    { from: "eco_psych", to: "jj_gibson"},
    { from: "eco_psych", to: "m_turvey"}
  ]);


  // create a network
  var container = document.getElementById("network");
  var data = {
    nodes: nodes,
    edges: edges
  };

  // Options for network
  var options = {
    interaction: { hover: true },
    manipulation: {
      enabled: true
    },
    nodes: {
      shape: 'box',
      color: {
        border: '#000000',
        background: '#b9c4d5'
        }
    },
     edges: {
       smooth: true,
       arrows: { to: true }
      },
     layout: {
        hierarchical: {
          sortMethod: "directed",
          shakeTowards: "leaves"
       }
      },
    physics: {
      enabled: true,
      hierarchicalRepulsion: {
          centralGravity: 0.0,
          springLength: 200,
          springConstant: 0.0,
          nodeDistance: 100,
          damping: 0.09
      },
      solver: 'hierarchicalRepulsion'
  }
  };

  var network = new vis.Network(container, data, options);

  var node_info = {
    "mark_bickhard": "<h1> Mark Bickhard </h1> <p> This is about professor Mark Bickhard. </p>",
    "interactivism": "<h1> Interactivism </h1> <p> This is about the philosophy of interactivism. </p>",
    "neuroscience": "<h1> Neuroscience </h1> <p> This is about the philosophy of interactivism. </p>",
    "FIAICS": "<h1> Foundational Issues in Artificial Intelligence and Cognitive Science </h1> <p> This is about the philosophy of interactivism. </p>"
  }

  network.on("click", function(params) {
    params.event = "[original event]";
    var nodeID = params.nodes[0];
    document.getElementById("text").innerHTML =
     node_info[nodeID];
    console.log(
      "click event, getNodeAt returns: " + this.getNodeAt(params.pointer.DOM)
    );
  });
})(document);
