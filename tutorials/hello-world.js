var toolbox = '<xml>';
toolbox += '<block type="actions_chat"></block>';
toolbox += '<block type="text"></block>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello world!',
    objective: 'Make the bot say "Hello world" in chat.<br><br>Hint: Once you are ready, press the <b>PLAY</b> button above to run your program.',
    toolbox: toolbox
});