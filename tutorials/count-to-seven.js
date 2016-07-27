var toolbox = '<xml>';
toolbox += '    <block type="actions_chat"></block>';
toolbox += '    <block type="text"></block>';
toolbox += '    <block type="controls_for">';
toolbox += '        <value name="FROM">';
toolbox += '            <shadow type="math_number">';
toolbox += '                <field name="NUM">1</field>';
toolbox += '            </shadow>';
toolbox += '        </value>';
toolbox += '        <value name="TO">';
toolbox += '            <shadow type="math_number">';
toolbox += '                <field name="NUM">5</field>';
toolbox += '            </shadow>';
toolbox += '        </value>';
toolbox += '        <value name="BY">';
toolbox += '            <shadow type="math_number">';
toolbox += '                <field name="NUM">1</field>';
toolbox += '            </shadow>';
toolbox += '        </value>';
toolbox += '    </block>';
toolbox += '    <block type="math_number"></block>';
toolbox += '    <block type="variables_get">';
toolbox += '        <field name="VAR">i</field>';
toolbox += '    </block>';
toolbox += '</xml>';

initTutorial({
    title: 'One, two, three, ...',
    objective: 'Count to 7 in chat.</br></br>Hint: Try to avoid repeating yourself when writing code, use the newly available pieces to your advantage.',
    toolbox: toolbox
});