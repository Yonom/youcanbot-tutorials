var toolbox = '<xml>';
toolbox += '    <category name="Text" colour="160">';
toolbox += '        <block type="text"></block>';
toolbox += '        <block type="text_join"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Events" colour="65">';
toolbox += '        <block type="events_join"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Actions" colour="20">';
toolbox += '        <block type="actions_chat"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Values" colour="0">';
toolbox += '        <block type="values_username"></block>';
toolbox += '    </category>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello everyone!',
    objective: 'Write a bot that sends a private message to anyone who joins the room, welcoming them to the world.',
    hint: 'You can rejoin the room by clicking on "Go to lobby" and then pressing "Rejoin?".',
    toolbox: toolbox
});