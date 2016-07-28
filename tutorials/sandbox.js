var toolbox = '<xml>';
toolbox += '    <category name="Logic" colour="210">';
toolbox += '        <block type="controls_if"></block>';
toolbox += '        <block type="logic_compare"></block>';
toolbox += '        <block type="logic_operation"></block>';
toolbox += '        <block type="logic_negate"></block>';
toolbox += '        <block type="logic_boolean"></block>';
toolbox += '        <block type="logic_null"></block>';
toolbox += '        <block type="logic_ternary"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Loops" colour="120">';
toolbox += '        <block type="controls_repeat_ext">';
toolbox += '            <value name="TIMES">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">10</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="controls_whileUntil"></block>';
toolbox += '        <block type="controls_for">';
toolbox += '            <value name="FROM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="TO">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">10</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="BY">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="controls_forEach"></block>';
toolbox += '        <block type="controls_flow_statements"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Math" colour="230">';
toolbox += '        <block type="math_number"></block>';
toolbox += '        <block type="math_arithmetic">';
toolbox += '            <value name="A">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="B">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_single">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">9</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_trig">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">45</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_constant"></block>';
toolbox += '        <block type="math_number_property">';
toolbox += '            <value name="NUMBER_TO_CHECK">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">0</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_change">';
toolbox += '            <value name="DELTA">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_round">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">3.1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_on_list"></block>';
toolbox += '        <block type="math_modulo">';
toolbox += '            <value name="DIVIDEND">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">64</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="DIVISOR">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">10</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_constrain">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">50</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="LOW">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="HIGH">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">100</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_random_int">';
toolbox += '            <value name="FROM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">1</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '            <value name="TO">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">100</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="math_random_float"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Text" colour="160">';
toolbox += '        <block type="text"></block>';
toolbox += '        <block type="text_join"></block>';
toolbox += '        <block type="text_append">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text"></shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_length">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_isEmpty">';
toolbox += '            <value name="VALUE">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT"></field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_indexOf">';
toolbox += '            <value name="VALUE">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{textVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '            <value name="FIND">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_charAt">';
toolbox += '            <value name="VALUE">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{textVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_getSubstring">';
toolbox += '            <value name="STRING">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{textVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_changeCase">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="text_trim">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '    </category>';
toolbox += '    <category name="Lists" colour="260">';
toolbox += '        <block type="lists_create_with">';
toolbox += '            <mutation items="0"></mutation>';
toolbox += '        </block>';
toolbox += '        <block type="lists_create_with"></block>';
toolbox += '        <block type="lists_repeat">';
toolbox += '            <value name="NUM">';
toolbox += '                <shadow type="math_number">';
toolbox += '                    <field name="NUM">5</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_length"></block>';
toolbox += '        <block type="lists_isEmpty"></block>';
toolbox += '        <block type="lists_indexOf">';
toolbox += '            <value name="VALUE">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{listVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_getIndex">';
toolbox += '            <value name="VALUE">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{listVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_setIndex">';
toolbox += '            <value name="LIST">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{listVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_getSublist">';
toolbox += '            <value name="LIST">';
toolbox += '                <block type="variables_get">';
toolbox += '                    <field name="VAR">{listVariable}</field>';
toolbox += '                </block>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_split">';
toolbox += '            <value name="DELIM">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">,</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="lists_sort"></block>';
toolbox += '    </category>';
toolbox += '    <sep></sep>';
toolbox += '    <category name="Events" colour="65">';
toolbox += '        <block type="events_join"></block>';
toolbox += '        <block type="events_leave"></block>';
toolbox += '        <block type="events_smiley"></block>';
toolbox += '        <block type="events_chat"></block>';
toolbox += '        <block type="events_move"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Actions" colour="20">';
toolbox += '        <block type="actions_chat">';
toolbox += '            <value name="TEXT">';
toolbox += '                <shadow type="text">';
toolbox += '                    <field name="TEXT">abc</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_smiley">';
toolbox += '            <value name="SMILEY">';
toolbox += '                <shadow type="types_smiley">';
toolbox += '                    <field name="SMILEY">SMILE</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '        <block type="actions_god">';
toolbox += '            <value name="ENABLED">';
toolbox += '                <shadow type="logic_boolean">';
toolbox += '                    <field name="BOOL">TRUE</field>';
toolbox += '                </shadow>';
toolbox += '            </value>';
toolbox += '        </block>';
toolbox += '    </category>';
toolbox += '    <category name="Types" colour="95">';
toolbox += '        <block type="types_smiley"></block>';
toolbox += '        <block type="types_smiley_id"></block>';
toolbox += '    </category>';
toolbox += '    <category name="Values" colour="0">';
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
toolbox += '    <category name="Functions" colour="290" custom="PROCEDURE"></category>';
toolbox += '</xml>';

initTutorial({
    title: 'The Sandbox',
    objective: 'In the sandbox you have access to every function without limitations.',
    toolbox: toolbox
});