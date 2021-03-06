var toolbox = '<xml>';
toolbox += '    <category name="Loops" colour="120">';
toolbox += '        <block type="controls_for"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Math" colour="230">';
toolbox += '        <block type="math_number"></block>';
toolbox += '    </category>';
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
toolbox += '    <sep></sep>';
toolbox += '    <category name="Variables" colour="330" custom="VARIABLE"></category>';
toolbox += '</xml>';

initTutorial({
    title: 'One, two, three, ...',
    objective: 'Count to 7 in chat. Avoid repeating yourself, use new puzzle pieces to your advantage.' ,
    hint: 'To learn more about any piece, right click on it and select "Help".',
    toolbox: toolbox
});