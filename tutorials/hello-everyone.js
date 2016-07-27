var toolbox = '<xml>';
toolbox += '<block type="events_"></block>';
toolbox += '<block type="actions_chat"></block>';
toolbox += '<block type="text"></block>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello everyone!',
    objective: 'Write a bot that says "Hello <username>" whenever someone joins the room.<br><br>Hint: You can join the room again by clicking on "Go to lobby" and then pressing "Rejoin?".',
    toolbox: toolbox
});

//Yellow puzzle pieces are called events, they run the code below them when something happens.