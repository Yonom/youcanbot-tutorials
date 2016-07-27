var toolbox = '<xml>';
toolbox += '<block type="events_join"></block>';
toolbox += '<block type="actions_chat"></block>';
toolbox += '<block type="text"></block>';
toolbox += '<block type="text_join"></block>';
toolbox += '<block type="variables_username"></block>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello everyone!',
    objective: 'Write a bot that says hello to everyone who joins the room.<br><br>Hint: You can join the room again by clicking on "Go to lobby" and then pressing "Rejoin?".',
    toolbox: toolbox
});

//Yellow puzzle pieces are called events, they run the code below them when something happens.