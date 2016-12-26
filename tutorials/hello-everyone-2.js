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
    title: 'Hello everyone 2!',
    objective: 'Our players say our last bot is spaming the chat. Write a bot that welcomes anyone who joins the room, but this time, send them a <strong>private message</strong>',
    hint: 'The "create text with" tool has additional options that can be accessed by clicking on its cog.',
    toolbox: toolbox
});