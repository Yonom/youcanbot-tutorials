var toolbox = '<xml>';
toolbox += '    <category name="Logic" colour="210">';
toolbox += '        <block type="controls_if"></block>';
toolbox += '        <block type="logic_compare"></block>';
toolbox += '        <block type="logic_operation"></block>';
toolbox += '        <block type="logic_negate"></block>';
toolbox += '        <block type="logic_boolean"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Loops" colour="120">';
toolbox += '        <block type="controls_for"></block>';
toolbox += '        <block type="controls_forEach"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Math" colour="230">';
toolbox += '        <block type="math_number"></block>';
toolbox += '        <block type="math_arithmetic"></block>';
toolbox += '        <block type="math_number_property"></block>';
toolbox += '        <block type="math_modulo"></block>';
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
toolbox += '        <block type="actions_block"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Values" colour="0">';
toolbox += '        <block type="values_player_get"></block>';
toolbox += '        <block type="values_players"></block>';
toolbox += '        <block type="values_userid"></block>';
toolbox += '        <block type="values_username"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Variables" colour="330" custom="VARIABLE"></category>';
toolbox += '</xml>';

initTutorial({
    title: 'Checker the map',
    objective: 'Create a chess board pattern where every 2nd block is a basic gray block. Basic gray blocks have block id 9.' ,
    hint: 'Often there are multiple solutions to the same problem.',
    toolbox: toolbox
});