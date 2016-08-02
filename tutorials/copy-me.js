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
toolbox += '        <block type="events_smiley"></block>';
toolbox += '        <block type="events_chat"></block>';
toolbox += '        <block type="events_move"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Actions" colour="20">';
toolbox += '        <block type="actions_smiley"></block>';
toolbox += '        <block type="actions_chat"></block>';
toolbox += '        <block type="actions_move"></block>';
toolbox += '        <block type="actions_block"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Values" colour="0">';
toolbox += '        <block type="values_player_get"></block>';
toolbox += '        <block type="values_players"></block>';
toolbox += '        <block type="values_userid"></block>';
toolbox += '        <block type="values_username"></block>';
toolbox += '        <block type="values_message"></block>';
toolbox += '        <block type="values_smiley"></block>';
toolbox += '        <block type="values_x"></block>';
toolbox += '        <block type="values_y"></block>';
toolbox += '        <block type="values_speedx"></block>';
toolbox += '        <block type="values_speedy"></block>';
toolbox += '        <block type="values_horizontal"></block>';
toolbox += '        <block type="values_vertical"></block>';
toolbox += '        <block type="values_spacedown"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Variables" colour="330" custom="VARIABLE"></category>';
toolbox += '</xml>';

initTutorial({
    title: 'Copy me',
    objective: 'When a player chats "!copyme", start mimicking them: If they change their smiley, copy their smiley. If they move, follow them.',
    hint: 'You can share what you build with your friends using the <strong>SHARE</strong> button.',
    toolbox: toolbox
});