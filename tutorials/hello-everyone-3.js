var toolbox = '<xml>';
toolbox += '    <category name="Loops" colour="120">';
toolbox += '        <block type="controls_for"></block>';
toolbox += '        <block type="controls_forEach"></block>';
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
toolbox += '        <block type="values_player_get"></block>';
toolbox += '        <block type="values_players"></block>';
toolbox += '        <block type="values_userid"></block>';
toolbox += '        <block type="values_username"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Variables" colour="330" custom="VARIABLE"></category>';
toolbox += '</xml>';

initTutorial({
    title: 'Hello everyone 3!',
    objective: 'Whops! It turns out that we left out players who were already in our room before the bot was started. Write a bot that sends a welcome PM to everyone in the room. You can run the same code for every Player in the "players" List by using the "foreach" puzzle piece. Use the new "get _ of player _" block to access the username of that player!',
    hint: 'Can\'t keep up? Slow down the computer using the speed buttons or <strong>PAUSE</strong> and run your code <strong>STEP</strong> by step!',
    toolbox: toolbox
});