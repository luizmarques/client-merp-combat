import { Suspense } from 'react';
import { Banner } from './components/Banner';
import { CharacterRow } from './components/CharacterRow';
import Header from './components/Header';
import { getCharactersByProfession, getFeaturedCharacter } from './service/CharacterService';


export default async function Home() {
  const featuredCharacter = await getFeaturedCharacter('550e8400-e29b-41d4-a716-446655440000');
  const professions = ['Warrior', 'Mage', 'Warrior', 'Mage'];

  const characters = await Promise.all(
    professions.map(async (profession) => {
      const characters = await getCharactersByProfession(profession, { _limit: 8 });
      return { sectionTitle: profession, characters };
    })
  );

  return (
    <Suspense>
<div class="sheet-1colrow">
    <div style="text-align: center;">
        <h1><span style="font-weight: bold;"><img src="http://i.imgur.com/Wc2yuQ7.png" style="float: center;" /></span></h1>
    </div>
</div>
<hr />
<input type="radio" name="attr_tab" class="sheet-tab sheet-tab1" value="1" title="PC" checked="checked" />
<span class="sheet-tab sheet-tab1">PC</span>
<input type="radio" name="attr_tab" class="sheet-tab sheet-tab2" value="2" title="Notes" />
<span class="sheet-tab sheet-tab2">Notes</span>

<span class="sheet-tab sheet-tab3">?</span>
<input type="radio" name="attr_tab" class="sheet-tab sheet-tab4" value="4" title="NPC" />
<span class="sheet-tab sheet-tab4">NPC</span>
<input type="radio" name="attr_tab" class="sheet-tab sheet-tab9" value="9" title="R Tmplts" />
<span class="sheet-tab sheet-tab9">R Tmplts</span>
<br>&nbsp;
<div class="sheet-tab-content sheet-tab1">
    <h1> </h1>
    <label class="sheet-label">
        <input name="attr_expand" type="radio" value="1" class="sheet-expand" checked="true" />
        <div class="sheet-tab">Character</div>
        <label class="sheet-label">
            <input name="attr_expand" type="radio" value="2" class="sheet-expand" />
            <div class="sheet-tab">Combat</div>
            <label class="sheet-label">
                <input name="attr_expand" type="radio" value="3" class="sheet-expand" />
                <div class="sheet-tab">Skills</div>
                <label class="sheet-label">
                    <input name="attr_expand" type="radio" value="4" class="sheet-expand" />
                    <div class="sheet-tab">Spells</div>
                    <label class="sheet-label">
                        <input name="attr_expand" type="radio" value="5" class="sheet-expand" />
                        <div class="sheet-tab">Equipment</div>
                        <div class="sheet-character-sheet sheet-show">
                            
                            <div style="float: left">
                                <table>
                                    <input type="checkbox" class="sheet-pc-equip-show sheet-arrow" title="equip-show" name="attr_equip-show" value="1" checked />
                                    <span></span>
                                    <td class="sheet-statlabel-big" style="width: 900px;">Equipment</td>
                                </table>
                                <div class="sheet-pc-equip">
                                    <table>
                                        <tr>
                                            <td>
                                                <table>
                                                    <tr>
                                                        <td colspan="4">Coins</td>
                                                        <td rowspan="9"><b>Gems & Jewelry</b><br><textarea rows="12" cols="55" style="width: 450px;" name="attr_gems" title="gems"></textarea></td>
                                                    </tr>
                                                    <tr><td>Mithril</td><td><input type="text" name="attr_mithril1" title="mithril1"></td><td><input type="text" name="attr_mithril2" title="mithril2"></td><td><input type="text" name="attr_mithril3" title="mithril3"></td></tr>
                                                    <tr><td>Platinum</td><td><input type="text" name="attr_platinum1" title="platinum1"></td><td><input type="text" name="attr_platinum2" title="platinum2"></td><td><input type="text" name="attr_platinum3" title="platinum3"></td></tr>
                                                    <tr><td>Gold</td><td><input type="text" name="attr_gold1" title="gold1"></td><td><input type="text" name="attr_gold2" title="gold2"></td><td><input type="text" name="attr_gold3" title="gold3"></td></tr>
                                                    <tr><td>Silver</td><td><input type="text" name="attr_silver1" title="silver1"></td><td><input type="text" name="attr_silver2" title="silver2"></td><td><input type="text" name="attr_silver3" title="silver3"></td></tr>
                                                    <tr><td>Bronze</td><td><input type="text" name="attr_bronze1" title="bronze1"></td><td><input type="text" name="attr_bronze2" title="bronze2"></td><td><input type="text" name="attr_bronze3" title="bronze3"></td></tr>
                                                    <tr><td>Copper</td><td><input type="text" name="attr_copper1" title="copper1"></td><td><input type="text" name="attr_copper2" title="copper2"></td><td><input type="text" name="attr_copper3" title="copper3"></td></tr>
                                                    <tr><td>Tin</td><td><input type="text" name="attr_tin1" title="tin1"></td><td><input type="text" name="attr_tin2" title="tin2"></td><td><input type="text" name="attr_tin3" title="tin3"></td></tr>
                                                    <tr><td>Iron</td><td><input type="text" name="attr_iron1" title="iron1"></td><td><input type="text" name="attr_iron2" title="iron2"></td><td><input type="text" name="attr_iron3" title="iron3"></td></tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr><td>&nbsp;</td></tr>
                                    </table>
                                    <div style="float: left">
                                        <table>
                                            <tr class="sheet-table-header">
                                                <td>Total Weight:<input type="text" style="width: 50px;" name="attr_totalweightcarried" title="totalweightcarried" value="0"></td>
                                                <td>Weight Allowance:<input type="text" style="width: 50px;" name="attr_weightallowance" title="weightallowance" value="floor(@{weight}/10)" disabled></td>
                                                <td>Encumbrance Penalty:<input type="text" style="width: 50px;" name="attr_encumbrancepen" title="encumbrancepen" value="(-8*floor(10*@{totalweightcarried}/(@{weight}+1)))" disabled></td>
                                                <td>Weight Penalty:<input type="text" style="width: 50px;" name="attr_weightpenalty" title="weightpenalty" value="ceil((0-(@{dbquickpen1}+@{encumbrancepen}+(3*(@{stbonus}))))/1e10)*(@{dbquickpenworn}+@{encumbrancepen}+(3*(@{stbonus})))" disabled></td>
                                            </tr>
                                        </table>
                                        <br>
                                    </div>
                                    <div style="float: left">
                                        <table>
                                            <tr class="sheet-table-header">
                                                <td style="width: 190px;">Item </td>
                                                <td style="width: 50px;">Location</td>
                                                <td style="width: 50px;">Weight</td>
                                                <td style="width: 550px;">Notes</td>
                                            </tr>
                                        </table>
                                        <fieldset class="repeating_equipment">
                                            <table style="width: 100%;" class="sheet-table-row">
                                                <tr>
                                                    <td style="width: 190px;"><input type="text" name="attr_equipmentname"></td>
                                                    <td style="width: 50px;"><input type="text" style="width: 50px;" name="attr_equipmentlocation"></td>
                                                    <td style="width: 50px;"><input type="text" style="width: 50px;" name="attr_equipmentweight"></td>
                                                    <td style="width: 550px;"><input type="text" name="attr_equipmentnotes"></td>
                                                </tr>
                                            </table>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <div class="sheet-character-sheet sheet-show">
                        
                        <div style="float: left">
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsownbase-show sheet-arrow" title="spellsownbase-show" name="attr_spellsownbase-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Same Realm Own Base Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_srob-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_srob-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_srob-cattotalbonus" title="Total Bonus" value="(@{srob-catstatbonus}+@{srob-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsownbase">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                    <span class="sheet-table-header2">Macro</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list1name" title="srob-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1access" title="srob-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1totalbonus" title="srob-list1totalbonus" value="@{srob-list1ranksbonus}+@{srob-list1catbonus}+@{srob-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1ranks" title="srob-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1ranksbonus" title="srob-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1catbonus" title="srob-list1catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1specialbonus" title="srob-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list1itembonus" title="srob-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list1macro" title="srob-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list1check" title="srob-list1check" value="@{srob-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list2name" title="srob-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2access" title="srob-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2totalbonus" title="srob-list2totalbonus" value="@{srob-list2ranksbonus}+@{srob-list2catbonus}+@{srob-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2ranks" title="srob-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2ranksbonus" title="srob-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2catbonus" title="srob-list2catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2specialbonus" title="srob-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list2itembonus" title="srob-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list2macro" title="srob-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list2check" title="srob-list2check" value="@{srob-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list3name" title="srob-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3access" title="srob-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3totalbonus" title="srob-list3totalbonus" value="@{srob-list3ranksbonus}+@{srob-list3catbonus}+@{srob-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3ranks" title="srob-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3ranksbonus" title="srob-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3catbonus" title="srob-list3catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3specialbonus" title="srob-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list3itembonus" title="srob-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list3macro" title="srob-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list3check" title="srob-list3check" value="@{srob-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list4name" title="srob-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4access" title="srob-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4totalbonus" title="srob-list4totalbonus" value="@{srob-list4ranksbonus}+@{srob-list4catbonus}+@{srob-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4ranks" title="srob-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4ranksbonus" title="srob-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4catbonus" title="srob-list4catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4specialbonus" title="srob-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list4itembonus" title="srob-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list4macro" title="srob-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list4check" title="srob-list4check" value="@{srob-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list5name" title="srob-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5access" title="srob-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5totalbonus" title="srob-list5totalbonus" value="@{srob-list5ranksbonus}+@{srob-list5catbonus}+@{srob-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5ranks" title="srob-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5ranksbonus" title="srob-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5catbonus" title="srob-list5catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5specialbonus" title="srob-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list5itembonus" title="srob-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list5macro" title="srob-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list5check" title="srob-list5check" value="@{srob-list5macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list6name" title="srob-list6name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6access" title="srob-list6access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6totalbonus" title="srob-list6totalbonus" value="@{srob-list6ranksbonus}+@{srob-list6catbonus}+@{srob-list6specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6ranks" title="srob-list6ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6ranksbonus" title="srob-list6rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6catbonus" title="srob-list6catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6specialbonus" title="srob-list6specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list6itembonus" title="srob-list6itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list6macro" title="srob-list6macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list6name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list6totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list6totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list6check" title="srob-list6check" value="@{srob-list6macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list7name" title="srob-list7name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7access" title="srob-list7access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7totalbonus" title="srob-list7totalbonus" value="@{srob-list7ranksbonus}+@{srob-list7catbonus}+@{srob-list7specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7ranks" title="srob-list7ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7ranksbonus" title="srob-list7rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7catbonus" title="srob-list7catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7specialbonus" title="srob-list7specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list7itembonus" title="srob-list7itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list7macro" title="srob-list7macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list7name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list7totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list7totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list7check" title="srob-list7check" value="@{srob-list7macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list8name" title="srob-list8name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8access" title="srob-list8access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8totalbonus" title="srob-list8totalbonus" value="@{srob-list8ranksbonus}+@{srob-list8catbonus}+@{srob-list8specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8ranks" title="srob-list8ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8ranksbonus" title="srob-list8ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8catbonus" title="srob-list8catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8specialbonus" title="srob-list8specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list8itembonus" title="srob-list8itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list8macro" title="srob-list8macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list8name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list8totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list8totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list8check" title="srob-list8check" value="@{srob-list8macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list9name" title="srob-list9name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9access" title="srob-list9access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9totalbonus" title="srob-list9totalbonus" value="@{srob-list9ranksbonus}+@{srob-list9catbonus}+@{srob-list9specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9ranks" title="srob-list9ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9ranksbonus" title="srob-list9ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9catbonus" title="srob-list9catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9specialbonus" title="srob-list9specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list9itembonus" title="srob-list9itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list9macro" title="srob-list9macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list9name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list9totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list9totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list9check" title="srob-list9check" value="@{srob-list9macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srob-list10name" title="srob-list10name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10access" title="srob-list10access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10totalbonus" title="srob-list10totalbonus" value="@{srob-list10ranksbonus}+@{srob-list10catbonus}+@{srob-list10specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10ranks" title="srob-list10ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10ranksbonus" title="srob-list10ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10catbonus" title="srob-list10catbonus (Stat Bonus)" value="@{srob-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10specialbonus" title="srob-list10specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srob-list10itembonus" title="srob-list10itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srob-list10macro" title="srob-list10macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list10name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srob-list10totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srob-list10totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srob-list10check" title="srob-list10check" value="@{srob-list10macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsopen-show sheet-arrow" title="spellsopen-show" name="attr_spellsopen-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Same Realm Open Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_sropen-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Prof bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_sropen-catprofbonus" title="Profession Bonus" value="0"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_sropen-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_sropen-cattotalbonus" title="Total Bonus" value="(@{sropen-catstatbonus}+@{sropen-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsopen">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list1name" title="sropen-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1access" title="sropen-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1totalbonus" title="sropen-list1totalbonus" value="@{sropen-list1ranksbonus}+@{sropen-list1catbonus}+@{sropen-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1ranks" title="sropen-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1ranksbonus" title="sropen-list1rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1catbonus" title="sropen-list1catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1specialbonus" title="sropen-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list1itembonus" title="sropen-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list1macro" title="sropen-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list1check" title="sropen-list1check" value="@{sropen-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list2name" title="sropen-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2access" title="sropen-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2totalbonus" title="sropen-list2totalbonus" value="@{sropen-list2ranksbonus}+@{sropen-list2catbonus}+@{sropen-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2ranks" title="sropen-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2ranksbonus" title="sropen-list2rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2catbonus" title="sropen-list2catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2specialbonus" title="sropen-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list2itembonus" title="sropen-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list2macro" title="sropen-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list2check" title="sropen-list2check" value="@{sropen-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list3name" title="sropen-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3access" title="sropen-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3totalbonus" title="sropen-list3totalbonus" value="@{sropen-list3ranksbonus}+@{sropen-list3catbonus}+@{sropen-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3ranks" title="sropen-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3ranksbonus" title="sropen-list3rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3catbonus" title="sropen-list3catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3specialbonus" title="sropen-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list3itembonus" title="sropen-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list3macro" title="sropen-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list3check" title="sropen-list3check" value="@{sropen-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list4name" title="sropen-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4access" title="sropen-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4totalbonus" title="sropen-list4totalbonus" value="@{sropen-list4ranksbonus}+@{sropen-list4catbonus}+@{sropen-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4ranks" title="sropen-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4ranksbonus" title="sropen-list4rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4catbonus" title="sropen-list4catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4specialbonus" title="sropen-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list4itembonus" title="sropen-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list4macro" title="sropen-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list4check" title="sropen-list4check" value="@{sropen-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list5name" title="sropen-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5access" title="sropen-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5totalbonus" title="sropen-list5totalbonus" value="@{sropen-list5ranksbonus}+@{sropen-list5catbonus}+@{sropen-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5ranks" title="sropen-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5ranksbonus" title="sropen-list5rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5catbonus" title="sropen-list5catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5specialbonus" title="sropen-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list5itembonus" title="sropen-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list5macro" title="sropen-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list5check" title="sropen-list5check" value="@{sropen-list5macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list6name" title="sropen-list6name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6access" title="sropen-list6access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6totalbonus" title="sropen-list6totalbonus" value="@{sropen-list6ranksbonus}+@{sropen-list6catbonus}+@{sropen-list6specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6ranks" title="sropen-list6ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6ranksbonus" title="sropen-list6rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6catbonus" title="sropen-list6catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6specialbonus" title="sropen-list6specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list6itembonus" title="sropen-list6itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list6macro" title="sropen-list6macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list6name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list6totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list6totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list6check" title="sropen-list6check" value="@{sropen-list6macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list7name" title="sropen-list7name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7access" title="sropen-list7access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7totalbonus" title="sropen-list7totalbonus" value="@{sropen-list7ranksbonus}+@{sropen-list7catbonus}+@{sropen-list7specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7ranks" title="sropen-list7ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7ranksbonus" title="sropen-list7rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7catbonus" title="sropen-list7catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7specialbonus" title="sropen-list7specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list7itembonus" title="sropen-list7itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list7macro" title="sropen-list7macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list7name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list7totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list7totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list7check" title="sropen-list7check" value="@{sropen-list7macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list8name" title="sropen-list8name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8access" title="sropen-list8access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8totalbonus" title="sropen-list8totalbonus" value="@{sropen-list8ranksbonus}+@{sropen-list8catbonus}+@{sropen-list8specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8ranks" title="sropen-list8ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8ranksbonus" title="sropen-list8rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8catbonus" title="sropen-list8catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8specialbonus" title="sropen-list8specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list8itembonus" title="sropen-list8itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list8macro" title="sropen-list8macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list8name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list8totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list8totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list8check" title="sropen-list8check" value="@{sropen-list8macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list9name" title="sropen-list9name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9access" title="sropen-list9access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9totalbonus" title="sropen-list9totalbonus" value="@{sropen-list9ranksbonus}+@{sropen-list9catbonus}+@{sropen-list9specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9ranks" title="sropen-list9ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9ranksbonus" title="sropen-list9rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9catbonus" title="sropen-list9catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9specialbonus" title="sropen-list9specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list9itembonus" title="sropen-list9itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list9macro" title="sropen-list9macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list9name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list9totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list9totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list9check" title="sropen-list9check" value="@{sropen-list9macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_sropen-list10name" title="sropen-list10name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10access" title="sropen-list10access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10totalbonus" title="sropen-list10totalbonus" value="@{sropen-list10ranksbonus}+@{sropen-list10catbonus}+@{sropen-list10specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10ranks" title="sropen-list10ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10ranksbonus" title="sropen-list10rankbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10catbonus" title="sropen-list10catbonus (Stat Bonus)" value="@{sropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10specialbonus" title="sropen-list10specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_sropen-list10itembonus" title="sropen-list10itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_sropen-list10macro" title="sropen-list10macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{sropen-list10name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{sropen-list10totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{sropen-list10totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_sropen-list10check" title="sropen-list10check" value="@{sropen-list10macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsclosed-show sheet-arrow" title="spellsclosed-show" name="attr_spellsclosed-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Same Realm Closed Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_srclosed-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_srclosed-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_srclosed-cattotalbonus" title="Total Bonus" value="(@{srclosed-catstatbonus}+@{srclosed-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsclosed">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list1name" title="srclosed-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1access" title="srclosed-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1totalbonus" title="srclosed-list1totalbonus" value="@{srclosed-list1ranksbonus}+@{srclosed-list1catbonus}+@{srclosed-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1ranks" title="srclosed-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1ranksbonus" title="srclosed-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1catbonus" title="srclosed-list1catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1specialbonus" title="srclosed-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list1itembonus" title="srclosed-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list1macro" title="srclosed-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list1check" title="srclosed-list1check" value="@{srclosed-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list2name" title="srclosed-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2access" title="srclosed-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2totalbonus" title="srclosed-list2totalbonus" value="@{srclosed-list2ranksbonus}+@{srclosed-list2catbonus}+@{srclosed-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2ranks" title="srclosed-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2ranksbonus" title="srclosed-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2catbonus" title="srclosed-list2catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2specialbonus" title="srclosed-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list2itembonus" title="srclosed-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list2macro" title="srclosed-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list2check" title="srclosed-list2check" value="@{srclosed-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list3name" title="srclosed-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3access" title="srclosed-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3totalbonus" title="srclosed-list3totalbonus" value="@{srclosed-list3ranksbonus}+@{srclosed-list3catbonus}+@{srclosed-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3ranks" title="srclosed-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3ranksbonus" title="srclosed-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3catbonus" title="srclosed-list3catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3specialbonus" title="srclosed-list3profbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list3itembonus" title="srclosed-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list3macro" title="srclosed-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list3check" title="srclosed-list3check" value="@{srclosed-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list4name" title="srclosed-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4access" title="srclosed-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4totalbonus" title="srclosed-list4totalbonus" value="@{srclosed-list4ranksbonus}+@{srclosed-list4catbonus}+{srclosed-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4ranks" title="srclosed-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4ranksbonus" title="srclosed-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4catbonus" title="srclosed-list4catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4specialbonus" title="srclosed-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list4itembonus" title="srclosed-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list4macro" title="srclosed-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list4check" title="srclosed-list4check" value="@{srclosed-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list5name" title="srclosed-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5access" title="srclosed-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5totalbonus" title="srclosed-list5totalbonus" value="@{srclosed-list5ranksbonus}+@{srclosed-list5catbonus}+@{srclosed-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5ranks" title="srclosed-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5ranksbonus" title="srclosed-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5catbonus" title="srclosed-list5catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5specialbonus" title="srclosed-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list5itembonus" title="srclosed-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list5macro" title="srclosed-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list5check" title="srclosed-list5check" value="@{srclosed-list5macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list6name" title="srclosed-list6name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6access" title="srclosed-list6access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6totalbonus" title="srclosed-list6totalbonus" value="@{srclosed-list6ranksbonus}+@{srclosed-list6catbonus}+@{srclosed-list6specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6ranks" title="srclosed-list6ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6ranksbonus" title="srclosed-list6ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6catbonus" title="srclosed-list6catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6specialbonus" title="srclosed-list6specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list6itembonus" title="srclosed-list6itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list6macro" title="srclosed-list6macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list6name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list6totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list6totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list6check" title="srclosed-list6check" value="@{srclosed-list6macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list7name" title="srclosed-list7name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7access" title="srclosed-list7access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7totalbonus" title="srclosed-list7totalbonus" value="@{srclosed-list7ranksbonus}+@{srclosed-list7catbonus}+@{srclosed-list7specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7ranks" title="srclosed-list7ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7ranksbonus" title="srclosed-list7ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7catbonus" title="srclosed-list7catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7specialbonus" title="srclosed-list7specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list7itembonus" title="srclosed-list7itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list7macro" title="srclosed-list7macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list7name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list7totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list7totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list7check" title="srclosed-list7check" value="@{srclosed-list7macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list8name" title="srclosed-list8name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8access" title="srclosed-list8access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8totalbonus" title="srclosed-list8totalbonus" value="@{srclosed-list8ranksbonus}+@{srclosed-list8catbonus}+@{srclosed-list8specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8ranks" title="srclosed-list8ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8ranksbonus" title="srclosed-list8ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8catbonus" title="srclosed-list8catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8specialbonus" title="srclosed-list8specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list8itembonus" title="srclosed-list8itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list8macro" title="srclosed-list8macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list8name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list8totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list8totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list8check" title="srclosed-list8check" value="@{srclosed-list8macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list9name" title="srclosed-list9name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9access" title="srclosed-list9access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9totalbonus" title="srclosed-list9totalbonus" value="@{srclosed-list9ranksbonus}+@{srclosed-list9catbonus}+@{srclosed-list9specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9ranks" title="srclosed-list9ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9ranksbonus" title="srclosed-list9ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9catbonus" title="srclosed-list9catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9specialbonus" title="srclosed-list9specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list9itembonus" title="srclosed-list9itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list9macro" title="srclosed-list9macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list9name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list9totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list9totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list9check" title="srclosed-list9check" value="@{srclosed-list9macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srclosed-list10name" title="srclosed-list10name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10access" title="srclosed-list10access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10totalbonus" title="srclosed-list10totalbonus" value="@{srclosed-list10ranksbonus}+@{srclosed-list10catbonus}+@{srclosed-list10specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10ranks" title="srclosed-list10ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10ranksbonus" title="srclosed-list10ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10catbonus" title="srclosed-list10catbonus (Stat Bonus)" value="@{srclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10specialbonus" title="srclosed-list10specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srclosed-list10itembonus" title="srclosed-list10itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srclosed-list10macro" title="srclosed-list10macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srclosed-list10name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srclosed-list10totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srclosed-list10totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srclosed-list10check" title="srclosed-list10check" value="@{srclosed-list10macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsotherbase-show sheet-arrow" title="spellsotherbase-show" name="attr_spellsotherbase-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Same Realm Other Base Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_srotherb-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_srotherb-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_srotherb-cattotalbonus" title="Total Bonus" value="(@{srotherb-catstatbonus}+@{srotherb-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsotherbase">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srotherb-list1name" title="srotherb-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1access" title="srotherb-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1totalbonus" title="srotherb-list1totalbonus" value="@{srotherb-list1ranksbonus}+@{srotherb-list1catbonus}+@{srotherb-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1ranks" title="srotherb-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1ranksbonus" title="srotherb-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1catbonus" title="srotherb-list1catbonus (Stat Bonus)" value="@{srotherb-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1specialbonus" title="srotherb-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list1itembonus" title="srotherb-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srotherb-list1macro" title="srotherb-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srotherb-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srotherb-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srotherb-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srotherb-list1check" title="srotherb-list1check" value="@{srotherb-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srotherb-list2name" title="srotherb-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2access" title="srotherb-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2totalbonus" title="srotherb-list2totalbonus" value="@{srotherb-list2ranksbonus}+@{srotherb-list2catbonus}+@{srotherb-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2ranks" title="srotherb-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2ranksbonus" title="srotherb-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2catbonus" title="srotherb-list2catbonus (Stat Bonus)" value="@{srotherb-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2specialbonus" title="srotherb-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list2itembonus" title="srotherb-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srotherb-list2macro" title="srotherb-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srotherb-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srotherb-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srotherb-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srotherb-list2check" title="srotherb-list2check" value="@{srotherb-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srotherb-list3name" title="srotherb-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3access" title="srotherb-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3totalbonus" title="srotherb-list3totalbonus" value="@{srotherb-list3ranksbonus}+@{srotherb-list3catbonus}+@{srotherb-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3ranks" title="srotherb-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3ranksbonus" title="srotherb-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3catbonus" title="srotherb-list3catbonus (Stat Bonus)" value="@{srotherb-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3specialbonus" title="srotherb-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list3itembonus" title="srotherb-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srotherb-list3macro" title="srotherb-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srotherb-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srotherb-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srotherb-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srotherb-list3check" title="srotherb-list3check" value="@{srotherb-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srotherb-list4name" title="srotherb-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4access" title="srotherb-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4totalbonus" title="srotherb-list4totalbonus" value="@{srotherb-list4ranksbonus}+@{srotherb-list4catbonus}+@{srotherb-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4ranks" title="srotherb-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4ranksbonus" title="srotherb-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4catbonus" title="srotherb-list4catbonus (Stat Bonus)" value="@{srotherb-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4specialbonus" title="srotherb-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list4itembonus" title="srotherb-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srotherb-list4macro" title="srotherb-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srotherb-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srotherb-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srotherb-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srotherb-list4check" title="srotherb-list4check" value="@{srotherb-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_srotherb-list5name" title="srotherb-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5access" title="srotherb-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5totalbonus" title="srotherb-list5totalbonus" value="@{srotherb-list5ranksbonus}+@{srotherb-list5catbonus}+@{srotherb-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5ranks" title="srotherb-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5ranksbonus" title="srotherb-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5catbonus" title="srotherb-list5catbonus (Stat Bonus)" value="@{srotherb-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5specialbonus" title="srotherb-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_srotherb-list5itembonus" title="srotherb-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_srotherb-list5macro" title="srotherb-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srotherb-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{srotherb-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{srotherb-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_srotherb-list5check" title="srotherb-list5check" value="@{srotherb-list5macro}"></button></span>
                                </div>
                            </div>
                            <hr />
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsoropen-show sheet-arrow" title="spellsoropen-show" name="attr_spellsoropen-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Other Realm Open Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_oropen-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_oropen-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_oropen-cattotalbonus" title="Total Bonus" value="(@{oropen-catstatbonus}+@{oropen-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsoropen">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_oropen-list1name" title="oropen-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1access" title="oropen-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1totalbonus" title="oropen-list1totalbonus" value="@{oropen-list1ranksbonus}+@{oropen-list1catbonus}+@{oropen-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1ranks" title="oropen-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1ranksbonus" title="oropen-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1catbonus" title="oropen-list1catbonus (Stat Bonus)" value="@{oropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1specialbonus" title="oropen-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list1itembonus" title="oropen-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_oropen-list1macro" title="oropen-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{oropen-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{oropen-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{oropen-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_oropen-list1check" title="oropen-list1check" value="@{oropen-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_oropen-list2name" title="oropen-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2access" title="oropen-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2totalbonus" title="oropen-list2totalbonus" value="@{oropen-list2ranksbonus}+@{oropen-list2catbonus}+@{oropen-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2ranks" title="oropen-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2ranksbonus" title="oropen-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2catbonus" title="oropen-list2catbonus (Stat Bonus)" value="@{oropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2specialbonus" title="oropen-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list2itembonus" title="oropen-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_oropen-list2macro" title="oropen-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{oropen-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{oropen-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{oropen-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_oropen-list2check" title="oropen-list2check" value="@{oropen-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_oropen-list3name" title="oropen-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3access" title="oropen-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3totalbonus" title="oropen-list3totalbonus" value="@{oropen-list3ranksbonus}+@{oropen-list3catbonus}+@{oropen-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3ranks" title="oropen-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3ranksbonus" title="oropen-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3catbonus" title="oropen-list3catbonus (Stat Bonus)" value="@{oropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3specialbonus" title="oropen-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list3itembonus" title="oropen-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_oropen-list3macro" title="oropen-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{oropen-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{oropen-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{oropen-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_oropen-list3check" title="oropen-list3check" value="@{oropen-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_oropen-list4name" title="oropen-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4access" title="oropen-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4totalbonus" title="oropen-list4totalbonus" value="@{oropen-list4ranksbonus}+@{oropen-list4catbonus}+@{oropen-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4ranks" title="oropen-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4ranksbonus" title="oropen-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4catbonus" title="oropen-list4catbonus (Stat Bonus)" value="@{oropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4specialbonus" title="oropen-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list4itembonus" title="oropen-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_oropen-list4macro" title="oropen-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{oropen-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{oropen-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{oropen-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_oropen-list4check" title="oropen-list4check" value="@{oropen-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_oropen-list5name" title="oropen-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5access" title="oropen-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5totalbonus" title="oropen-list5totalbonus" value="@{oropen-list5ranksbonus}+@{oropen-list5catbonus}+@{oropen-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5ranks" title="oropen-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5ranksbonus" title="oropen-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5catbonus" title="oropen-list5catbonus (Stat Bonus)" value="@{oropen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5specialbonus" title="oropen-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_oropen-list5itembonus" title="oropen-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_oropen-list5macro" title="oropen-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{oropen-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{oropen-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{oropen-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_oropen-list5check" title="oropen-list5check" value="@{oropen-list5macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsorclosed-show sheet-arrow" title="spellsorclosed-show" name="attr_spellsorclosed-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Other Realm Closed Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_orclosed-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_orclosed-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_orclosed-cattotalbonus" title="Total Bonus" value="(@{orclosed-catstatbonus}+@{orclosed-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsorclosed">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orclosed-list1name" title="orclosed-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1access" title="orclosed-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1totalbonus" title="orclosed-list1totalbonus" value="@{orclosed-list1ranksbonus}+@{orclosed-list1catbonus}+@{orclosed-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1ranks" title="orclosed-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1ranksbonus" title="orclosed-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1catbonus" title="orclosed-list1catbonus (Stat Bonus)" value="@{orclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1specialbonus" title="orclosed-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list1itembonus" title="orclosed-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orclosed-list1macro" title="orclosed-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orclosed-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orclosed-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orclosed-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orclosed-list1check" title="orclosed-list1check" value="@{orclosed-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orclosed-list2name" title="orclosed-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2access" title="orclosed-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2totalbonus" title="orclosed-list2totalbonus" value="@{orclosed-list2ranksbonus}+@{orclosed-list2catbonus}+@{orclosed-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2ranks" title="orclosed-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2ranksbonus" title="orclosed-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2catbonus" title="orclosed-list2catbonus (Stat Bonus)" value="@{orclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2specialbonus" title="orclosed-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list2itembonus" title="orclosed-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orclosed-list2macro" title="orclosed-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orclosed-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orclosed-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orclosed-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orclosed-list2check" title="orclosed-list2check" value="@{orclosed-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orclosed-list3name" title="orclosed-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3access" title="orclosed-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3totalbonus" title="orclosed-list3totalbonus" value="@{orclosed-list3ranksbonus}+@{orclosed-list3catbonus}+@{orclosed-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3ranks" title="orclosed-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3ranksbonus" title="orclosed-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3catbonus" title="orclosed-list3catbonus (Stat Bonus)" value="@{orclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3specialbonus" title="orclosed-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list3itembonus" title="orclosed-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orclosed-list3macro" title="orclosed-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orclosed-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orclosed-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orclosed-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orclosed-list3check" title="orclosed-list3check" value="@{orclosed-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orclosed-list4name" title="orclosed-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4access" title="orclosed-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4totalbonus" title="orclosed-list4totalbonus" value="@{orclosed-list4ranksbonus}+@{orclosed-list4catbonus}+@{orclosed-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4ranks" title="orclosed-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4ranksbonus" title="orclosed-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4catbonus" title="orclosed-list4catbonus (Stat Bonus)" value="@{orclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4specialbonus" title="orclosed-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list4itembonus" title="orclosed-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orclosed-list4macro" title="orclosed-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orclosed-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orclosed-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orclosed-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orclosed-list4check" title="orclosed-list4check" value="@{orclosed-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orclosed-list5name" title="orclosed-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5access" title="orclosed-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5totalbonus" title="orclosed-list5totalbonus" value="@{orclosed-list5ranksbonus}+@{orclosed-list5catbonus}+@{orclosed-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5ranks" title="orclosed-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5ranksbonus" title="orclosed-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5catbonus" title="orclosed-list5catbonus (Stat Bonus)" value="@{orclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5specialbonus" title="orclosed-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orclosed-list5itembonus" title="orclosed-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orclosed-list5macro" title="orclosed-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orclosed-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orclosed-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orclosed-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orclosed-list5check" title="orclosed-list5check" value="@{orclosed-list5macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsorbase-show sheet-arrow" title="spellsorbase-show" name="attr_spellsorbase-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Other Realm Base Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_orbase-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_orbase-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_orbase-cattotalbonus" title="Total Bonus" value="(@{orbase-catstatbonus}+@{orbase-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsorbase">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orbase-list1name" title="orbase-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1access" title="orbase-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1totalbonus" title="orbase-list1totalbonus" value="@{orbase-list1ranksbonus}+@{orbase-list1catbonus}+@{orbase-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1ranks" title="orbase-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1ranksbonus" title="orbase-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1catbonus" title="orbase-list1catbonus (Stat Bonus)" value="@{orbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1specialbonus" title="orbase-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list1itembonus" title="orbase-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orbase-list1macro" title="orbase-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orbase-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orbase-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orbase-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orbase-list1check" title="orbase-list1check" value="@{orbase-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orbase-list2name" title="orbase-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2access" title="orbase-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2totalbonus" title="orbase-list2totalbonus" value="@{orbase-list2ranksbonus}+@{orbase-list2catbonus}+@{orbase-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2ranks" title="orbase-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2ranksbonus" title="orbase-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2catbonus" title="orbase-list2catbonus (Stat Bonus)" value="@{orbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2specialbonus" title="orbase-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list2itembonus" title="orbase-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orbase-list2macro" title="orbase-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orbase-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orbase-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orbase-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orbase-list2check" title="orbase-list2check" value="@{orbase-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orbase-list3name" title="orbase-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3access" title="orbase-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3totalbonus" title="orbase-list3totalbonus" value="@{orbase-list3ranksbonus}+@{orbase-list3catbonus}+@{orbase-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3ranks" title="orbase-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3ranksbonus" title="orbase-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3catbonus" title="orbase-list3catbonus (Stat Bonus)" value="@{orbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3specialbonus" title="orbase-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list3itembonus" title="orbase-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orbase-list3macro" title="orbase-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orbase-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orbase-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orbase-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orbase-list3check" title="orbase-list3check" value="@{orbase-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orbase-list4name" title="orbase-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4access" title="orbase-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4totalbonus" title="orbase-list4totalbonus" value="@{orbase-list4ranksbonus}+@{orbase-list4catbonus}+@{orbase-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4ranks" title="orbase-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4ranksbonus" title="orbase-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4catbonus" title="orbase-list4catbonus (Stat Bonus)" value="@{orbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4specialbonus" title="orbase-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list4itembonus" title="orbase-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orbase-list4macro" title="orbase-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orbase-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orbase-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orbase-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orbase-list4check" title="orbase-list4check" value="@{orbase-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_orbase-list5name" title="orbase-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5access" title="orbase-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5totalbonus" title="orbase-list5totalbonus" value="@{orbase-list5ranksbonus}+@{orbase-list5catbonus}+@{orbase-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5ranks" title="orbase-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5ranksbonus" title="orbase-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5catbonus" title="orbase-list5catbonus (Stat Bonus)" value="@{orbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5specialbonus" title="orbase-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_orbase-list5itembonus" title="orbase-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_orbase-list5macro" title="orbase-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{orbase-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{orbase-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{orbase-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_orbase-list5check" title="orbase-list5check" value="@{orbase-list5macro}"></button></span>
                                </div>
                            </div>
                            <hr />
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsarcaneopen-show sheet-arrow" title="spellsarcaneopen-show" name="attr_spellsarcaneopen-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Arcane Open Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_arcopen-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_arcopen-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_arcopen-cattotalbonus" title="Total Bonus" value="(@{arcopen-catstatbonus}+@{arcopen-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsarcaneopen">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcopen-list1name" title="arcopen-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1access" title="arcopen-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1totalbonus" title="arcopen-list1totalbonus" value="@{arcopen-list1ranksbonus}+@{arcopen-list1catbonus}+@{arcopen-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1ranks" title="arcopen-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1ranksbonus" title="arcopen-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1catbonus" title="arcopen-list1catbonus (Stat Bonus)" value="@{arcopen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1specialbonus" title="arcopen-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list1itembonus" title="arcopen-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcopen-list1macro" title="arcopen-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcopen-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcopen-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcopen-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcopen-list1check" title="arcopen-list1check" value="@{arcopen-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcopen-list2name" title="arcopen-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2access" title="arcopen-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2totalbonus" title="arcopen-list2totalbonus" value="@{arcopen-list2ranksbonus}+@{arcopen-list2catbonus}+@{arcopen-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2ranks" title="arcopen-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2ranksbonus" title="arcopen-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2catbonus" title="arcopen-list2catbonus (Stat Bonus)" value="@{arcopen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2specialbonus" title="arcopen-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list2itembonus" title="arcopen-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcopen-list2macro" title="arcopen-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcopen-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcopen-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcopen-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcopen-list2check" title="arcopen-list2check" value="@{arcopen-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcopen-list3name" title="arcopen-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3access" title="arcopen-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3totalbonus" title="arcopen-list3totalbonus" value="@{arcopen-list3ranksbonus}+@{arcopen-list3catbonus}+@{arcopen-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3ranks" title="arcopen-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3ranksbonus" title="arcopen-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3catbonus" title="arcopen-list3catbonus (Stat Bonus)" value="@{arcopen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3specialbonus" title="arcopen-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list3itembonus" title="arcopen-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcopen-list3macro" title="arcopen-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcopen-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcopen-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcopen-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcopen-list3check" title="arcopen-list3check" value="@{arcopen-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcopen-list4name" title="arcopen-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4access" title="arcopen-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4totalbonus" title="arcopen-list4totalbonus" value="@{arcopen-list4ranksbonus}+@{arcopen-list4catbonus}+@{arcopen-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4ranks" title="arcopen-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4ranksbonus" title="arcopen-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4catbonus" title="arcopen-list4catbonus (Stat Bonus)" value="@{arcopen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4specialbonus" title="arcopen-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list4itembonus" title="arcopen-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcopen-list4macro" title="arcopen-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcopen-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcopen-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcopen-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcopen-list4check" title="arcopen-list4check" value="@{arcopen-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcopen-list5name" title="arcopen-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5access" title="arcopen-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5totalbonus" title="arcopen-list5totalbonus" value="@{arcopen-list5ranksbonus}+@{arcopen-list5catbonus}+@{arcopen-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5ranks" title="arcopen-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5ranksbonus" title="arcopen-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5catbonus" title="arcopen-list5catbonus (Stat Bonus)" value="@{arcopen-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5specialbonus" title="arcopen-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcopen-list5itembonus" title="arcopen-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcopen-list5macro" title="arcopen-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcopen-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcopen-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcopen-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcopen-list5check" title="arcopen-list5check" value="@{arcopen-list5macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsarcaneclosed-show sheet-arrow" title="spellsarcaneclosed-show" name="attr_spellsarcaneclosed-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Arcane Closed Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_arcclosed-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_arcclosed-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_arcclosed-cattotalbonus" title="Total Bonus" value="(@{arcclosed-catstatbonus}+@{arcclosed-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsarcaneclosed">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcclosed-list1name" title="arcclosed-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1access" title="arcclosed-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1totalbonus" title="arcclosed-list1totalbonus" value="@{arcclosed-list1ranksbonus}+@{arcclosed-list1catbonus}+@{arcclosed-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1ranks" title="arcclosed-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1ranksbonus" title="arcclosed-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1catbonus" title="arcclosed-list1catbonus (Stat Bonus)" value="@{arcclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1specialbonus" title="arcclosed-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list1itembonus" title="arcclosed-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcclosed-list1macro" title="arcclosed-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcclosed-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcclosed-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcclosed-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcclosed-list1check" title="arcclosed-list1check" value="@{arcclosed-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcclosed-list2name" title="arcclosed-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2access" title="arcclosed-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2totalbonus" title="arcclosed-list2totalbonus" value="@{arcclosed-list2ranksbonus}+@{arcclosed-list2catbonus}+@{arcclosed-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2ranks" title="arcclosed-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2ranksbonus" title="arcclosed-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2catbonus" title="arcclosed-list2catbonus (Stat Bonus)" value="@{arcclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2specialbonus" title="arcclosed-list2profbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list2itembonus" title="arcclosed-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcclosed-list2macro" title="arcclosed-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcclosed-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcclosed-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcclosed-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcclosed-list2check" title="arcclosed-list2check" value="@{arcclosed-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcclosed-list3name" title="arcclosed-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3access" title="arcclosed-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3totalbonus" title="arcclosed-list3totalbonus" value="@{arcclosed-list3ranksbonus}+@{arcclosed-list3catbonus}+@{arcclosed-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3ranks" title="arcclosed-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3ranksbonus" title="arcclosed-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3catbonus" title="arcclosed-list3catbonus (Stat Bonus)" value="@{arcclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3specialbonus" title="arcclosed-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list3itembonus" title="arcclosed-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcclosed-list3macro" title="arcclosed-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcclosed-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcclosed-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcclosed-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcclosed-list3check" title="arcclosed-list3check" value="@{arcclosed-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcclosed-list4name" title="arcclosed-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4access" title="arcclosed-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4totalbonus" title="arcclosed-list4totalbonus" value="@{arcclosed-list4ranksbonus}+@{arcclosed-list4catbonus}+@{arcclosed-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4ranks" title="arcclosed-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4ranksbonus" title="arcclosed-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4catbonus" title="arcclosed-list4catbonus (Stat Bonus)" value="@{arcclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4specialbonus" title="arcclosed-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list4itembonus" title="arcclosed-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcclosed-list4macro" title="arcclosed-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcclosed-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcclosed-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcclosed-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcclosed-list4check" title="arcclosed-list4check" value="@{arcclosed-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcclosed-list5name" title="arcclosed-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5access" title="arcclosed-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5totalbonus" title="arcclosed-list5totalbonus" value="@{arcclosed-list5ranksbonus}+@{arcclosed-list5catbonus}+@{arcclosed-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5ranks" title="arcclosed-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5ranksbonus" title="arcclosed-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5catbonus" title="arcclosed-list5catbonus (Stat Bonus)" value="@{arcclosed-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5specialbonus" title="arcclosed-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcclosed-list5itembonus" title="$-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcclosed-list5macro" title="arcclosed-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcclosed-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcclosed-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcclosed-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcclosed-list5check" title="arcclosed-list5check" value="@{arcclosed-list5macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsarcanebase-show sheet-arrow" title="spellsarcanebase-show" name="attr_spellsarcanebase-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Arcane Own Base Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_arcbase-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_arcbase-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_arcbase-cattotalbonus" title="Total Bonus" value="(@{arcbase-catstatbonus}+@{arcbase-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsarcanebase">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcbase-list1name" title="arcbase-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1access" title="arcbase-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1totalbonus" title="arcbase-list1totalbonus" value="@{arcbase-list1ranksbonus}+@{arcbase-list1catbonus}+@{arcbase-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1ranks" title="arcbase-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1ranksbonus" title="arcbase-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1catbonus" title="arcbase-list1catbonus (Stat Bonus)" value="@{arcbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1specialbonus" title="arcbase-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list1itembonus" title="arcbase-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcbase-list1macro" title="arcbase-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcbase-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcbase-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcbase-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcbase-list1check" title="arcbase-list1check" value="@{arcbase-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcbase-list2name" title="arcbase-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2access" title="arcbase-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2totalbonus" title="arcbase-list2totalbonus" value="@{arcbase-list2ranksbonus}+@{arcbase-list2catbonus}+@{arcbase-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2ranks" title="arcbase-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2ranksbonus" title="arcbase-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2catbonus" title="arcbase-list2catbonus (Stat Bonus)" value="@{arcbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2specialbonus" title="arcbase-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list2itembonus" title="arcbase-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcbase-list2macro" title="arcbase-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcbase-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcbase-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcbase-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcbase-list2check" title="arcbase-list2check" value="@{arcbase-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcbase-list3name" title="arcbase-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3access" title="arcbase-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3totalbonus" title="arcbase-list3totalbonus" value="@{arcbase-list3ranksbonus}+@{arcbase-list3catbonus}+@{arcbase-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3ranks" title="arcbase-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3ranksbonus" title="arcbase-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3catbonus" title="arcbase-list3catbonus (Stat Bonus)" value="@{arcbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3specialbonus" title="arcbase-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list3itembonus" title="arcbase-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcbase-list3macro" title="arcbase-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcbase-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcbase-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcbase-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcbase-list3check" title="arcbase-list3check" value="@{arcbase-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcbase-list4name" title="arcbase-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4access" title="arcbase-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4totalbonus" title="arcbase-list4totalbonus" value="@{arcbase-list4ranksbonus}+@{arcbase-list4catbonus}+@{arcbase-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4ranks" title="arcbase-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4ranksbonus" title="arcbase-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4catbonus" title="arcbase-list4catbonus (Stat Bonus)" value="@{arcbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4specialbonus" title="arcbase-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list4itembonus" title="arcbase-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcbase-list4macro" title="arcbase-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcbase-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcbase-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcbase-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcbase-list4check" title="arcbase-list4check" value="@{arcbase-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcbase-list5name" title="arcbase-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5access" title="arcbase-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5totalbonus" title="arcbase-list5totalbonus" value="@{arcbase-list5ranksbonus}+@{arcbase-list5catbonus}+@{arcbase-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5ranks" title="arcbase-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5ranksbonus" title="arcbase-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5catbonus" title="arcbase-list5catbonus (Stat Bonus)" value="@{arcbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5specialbonus" title="arcbase-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcbase-list5itembonus" title="arcbase-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcbase-list5macro" title="arcbase-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcbase-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcbase-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcbase-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcbase-list5check" title="arcbase-list5check" value="@{arcbase-list5macro}"></button></span>
                                </div>
                            </div>
                            <br>
                            <table>
                                <input type="checkbox" class="sheet-pc-spellsarcaneotherbase-show sheet-arrow" title="spellsarcaneotherbase-show" name="attr_spellsarcaneotherbase-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;"><b>Arcane Other Base Spells</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stat bonus:<input type="text" class="sheet-statlabel" style="width: 20px;" name="attr_arcotherbase-catstatbonus" title="Stat Bonus" value="@{realm}" disabled="true"> &nbsp; Special bonus:<input type="text" class="sheet-statlabel-rev" style="width: 20px;" name="attr_arcotherbase-catspecialbonus" title="Special Bonus" value="0"> &nbsp; Total bonus:<input type="text" class="sheet-statlabel" style="width: 30px;" name="attr_arcotherbase-cattotalbonus" title="Total Bonus" value="(@{arcotherbase-catstatbonus}+@{arcotherbase-catspecialbonus})" disabled="true"></td>
                            </table>
                            <div class="sheet-pc-spellsarcaneotherbase">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header2">Spell List Name</span>
                                    <span class="sheet-table-header2"> &nbsp; </span>
                                    <span class="sheet-table-header2">Total</span>
                                    <span class="sheet-table-header2">Ranks</span>
                                    <span class="sheet-table-header2">Rank<br>Bonus</span>
                                    <span class="sheet-table-header2">Stat<br>Bonus</span>
                                    <span class="sheet-table-header2">Special<br>Bonus</span>
                                    <span class="sheet-table-header2">Spell<br>Pick</span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcotherbase-list1name" title="arcotherbase-list1name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1access" title="arcotherbase-list1access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1totalbonus" title="arcotherbase-list1totalbonus" value="@{arcotherbase-list1ranksbonus}+@{arcotherbase-list1catbonus}+@{arcotherbase-list1specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1ranks" title="arcotherbase-list1ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1ranksbonus" title="arcotherbase-list1ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1catbonus" title="arcotherbase-list1catbonus (Stat Bonus)" value="@{arcotherbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1specialbonus" title="arcotherbase-list1specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list1itembonus" title="arcotherbase-list1itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcotherbase-list1macro" title="arcotherbase-list1macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcotherbase-list1name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list1totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list1totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcotherbase-list1check" title="arcotherbase-list1check" value="@{arcotherbase-list1macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcotherbase-list2name" title="arcotherbase-list2name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2access" title="arcotherbase-list2access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2totalbonus" title="arcotherbase-list2totalbonus" value="@{arcotherbase-list2ranksbonus}+@{arcotherbase-list2catbonus}+@{arcotherbase-list2specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2ranks" title="arcotherbase-list2ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2ranksbonus" title="arcotherbase-list2ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2catbonus" title="arcotherbase-list2catbonus (Stat Bonus)" value="@{arcotherbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2specialbonus" title="arcotherbase-list2specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list2itembonus" title="arcotherbase-list2itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcotherbase-list2macro" title="arcotherbase-list2macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcotherbase-list2name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list2totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list2totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcotherbase-list2check" title="arcotherbase-list2check" value="@{arcotherbase-list2macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcotherbase-list3name" title="arcotherbase-list3name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3access" title="arcotherbase-list3access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3totalbonus" title="arcotherbase-list3totalbonus" value="@{arcotherbase-list3ranksbonus}+@{arcotherbase-list3catbonus}+@{arcotherbase-list3specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3ranks" title="arcotherbase-list3ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3ranksbonus" title="arcotherbase-list3ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3catbonus" title="arcotherbase-list3catbonus (Stat Bonus)" value="@{arcotherbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3specialbonus" title="arcotherbase-list3specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list3itembonus" title="arcotherbase-list3itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcotherbase-list3macro" title="arcotherbase-list3macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcotherbase-list3name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list3totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list3totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcotherbase-list3check" title="arcotherbase-list3check" value="@{arcotherbase-list3macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcotherbase-list4name" title="arcotherbase-list4name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4access" title="arcotherbase-list4access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4totalbonus" title="arcotherbase-list4totalbonus" value="@{arcotherbase-list4ranksbonus}+@{arcotherbase-list4catbonus}+@{arcotherbase-list4specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4ranks" title="arcotherbase-list4ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4ranksbonus" title="arcotherbase-list4ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4catbonus" title="arcotherbase-list4catbonus (Stat Bonus)" value="@{arcotherbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4specialbonus" title="arcotherbase-list4specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list4itembonus" title="arcotherbase-list4itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcotherbase-list4macro" title="arcotherbase-list4macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcotherbase-list4name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list4totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list4totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcotherbase-list4check" title="arcotherbase-list4check" value="@{arcotherbase-list4macro}"></button></span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-skills"><input type="text" style="width: 250px;" name="attr_arcotherbase-list5name" title="arcotherbase-list5name (Spell List Name)" value="Spell List Name"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5access" title="arcotherbase-list5access"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5totalbonus" title="arcotherbase-list5totalbonus" value="@{arcotherbase-list5ranksbonus}+@{arcotherbase-list5catbonus}+@{arcotherbase-list5specialbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5ranks" title="arcotherbase-list5ranks (Number of Ranks)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5ranksbonus" title="arcotherbase-list5ranksbonus (Rank Bonus)" value="-30" readonly="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5catbonus" title="arcotherbase-list5catbonus (Stat Bonus)" value="@{arcotherbase-cattotalbonus}" disabled="true"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5specialbonus" title="arcotherbase-list5specialbonus (Special bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills"><input type="text" name="attr_arcotherbase-list5itembonus" title="arcotherbase-list5itembonus (Item bonus if applicable.)" value="0"></span>
                                    <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_arcotherbase-list5macro" title="arcotherbase-list5macro">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{arcotherbase-list5name} list. }} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list5totalbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{arcotherbase-list5totalbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                    <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_arcotherbase-list5check" title="arcotherbase-list5check" value="@{arcotherbase-list5macro}"></button></span>
                                </div>
                            </div>
                            <hr />
                        </div>

                    </div>
                </label>
                <div class="sheet-character-sheet sheet-show">
                    
                    <div style="float: left">
                        <table>
                            <input type="checkbox" class="sheet-pc-skills-show sheet-arrow" title="skills-show" name="attr_skills-show" value="1" checked />
                            <span></span>
                            <td class="sheet-statlabel-big" style="width: 900px;">Skills</td>
                        </table>
                        <div class="sheet-pc-skills">
                            <div class="sheet-table-row">
                                <span class="sheet-table-header2" style="width: 200px;">Skill</span>
                                <span class="sheet-table-header2" style="width: 40px;">Total<br>Bonus</span>
                                <span class="sheet-table-header2" style="width: 55px;">Ranks</span>
                                <span class="sheet-table-header2" style="width: 40px;">Rank<br>Bonus</span>
                                <span class="sheet-table-header2" style="width: 55px;">Stat</span>
                                <span class="sheet-table-header2" style="width: 40px;">Stat<br>Bonus</span>
                                <span class="sheet-table-header2" style="width: 40px;">Level<br>Bonus</span>
                                <span class="sheet-table-header2" style="width: 40px;">Special<br>Bonus</span>
                                <span class="sheet-table-header2" style="width: 40px;">Item<br>Bonus</span>
                                <span class="sheet-table-header2" style="width: 200px;">Macro</span>
                            </div>
                            <input type="checkbox" class="sheet-pc-skillgeneral-show sheet-arrow" title="skillgeneral-show" name="attr_skillgeneral-show" value="1" checked /><span style="text-align: left; font-size: 0.6em;">General</span>
                            <div class="sheet-pc-skillgeneral">
                                <div class="sheet-table-row">
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">1 Handed Edged</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1he1" data-ken="" title="weapon1he1" value="(@{weapon1he1ranksbonus}+@{weapon1he1stat}+@{weapon1he1lvlbonus}+@{weapon1he1specialmod}+@{weapon1he1itemmod})" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_weapon1he1ranks" data-ken="" title="weapon1he1ranks (Number of Ranks)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1he1ranksbonus" title="weapon1he1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>St</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1he1stat" title="weapon1he1stat (Stat Bonus)" value="@{stbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1he1lvlbonus" title="weapon1he1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1he1specialmod" title="weapon1he1specialmod (Any Special bonuses)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1he1itemmod" title="weapon1he1itemmod (Bonus modification from Item)" value="0"></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_weapon1he1macro" title="weapon1he1macro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{weapon1he1name}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{weapon1he1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{weapon1he1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_weapon1he1check" title="weapon1he1check" value="@{weapon1he1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">1 Handed Concussion</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1hc1" title="weapon1hc1" value="(@{weapon1hc1ranksbonus}+@{weapon1hc1stat}+@{weapon1hc1lvlbonus}+@{weapon1hc1specialmod}+@{weapon1hc1itemmod})" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_weapon1hc1ranks" title="weapon1hc1ranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1hc1ranksbonus" title="weapon1hc1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>St</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1hc1stat" title="weapon1hc1stat (Stat Bonus)" value="@{stbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1hc1lvlbonus" title="weapon1hc1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1hc1specialmod" title="weapon1hc1specialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon1hc1itemmod" title="weapon1hc1itemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_weapon1hc1macro" title="weapon1hc1macro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{weapon1hc1name}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{weapon1hc1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{weapon1hc1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_weapon1hc1check" title="weapon1hc1check" value="@{weapon1hc1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">2 Handed Weapons</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon2hand1" title="weapon2hand1" value="(@{weapon2hand1ranksbonus}+@{weapon2hand1stat}+@{weapon2hand1lvlbonus}+@{weapon2hand1specialmod}+@{weapon2hand1itemmod})" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_weapon2hand1ranks" title="weapon2hand1ranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon2hand1ranksbonus" title="weapon2hand1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>St</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon2hand1stat" title="weapon2hand1stat (Stat Bonus)" value="@{stbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon2hand1lvlbonus" title="weapon2hand1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon2hand1specialmod" title="weapon2hand1specialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weapon2hand1itemmod" title="weapon2hand1itemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_weapon2hand1macro" title="weapon2hand1macro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{weapon2hand1name}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{weapon2hand1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{weapon2hand1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_weapon2hand1check" title="weapon2hand1check" value="@{weapon2hand1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Throwing</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponthrown1" title="weaponthrown1" value="@{weaponthrown1ranksbonus}+@{weaponthrown1stat}+@{weaponthrown1lvlbonus}+@{weaponthrown1specialmod}+@{weaponthrown1itemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_weaponthrown1ranks" title="weaponthrown1ranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponthrown1ranksbonus" title="weaponthrown1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>St/Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponthrown1stat" title="weaponthrown1stat (Stat Bonus)" value="(@{stbonus}+@{agbonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponthrown1lvlbonus" title="weaponthrown1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponthrown1specialmod" title="weaponthrown1specialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponthrown1itemmod" title="weaponthrown1itemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_weaponthrown1macro" title="weaponthrown1macro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{weaponthrown1name}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{weaponthrown1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{weaponthrown1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_weaponthrown1check" title="weaponthrown1check" value="@{weaponthrown1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Missile</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponmissile1" title="weaponmissile1" value="@{weaponmissile1ranksbonus}+@{weaponmissile1stat}+@{weaponmissile1lvlbonus}+@{weaponmissile1specialmod}+@{weaponmissile1itemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_weaponmissile1ranks" title="weaponmissile1ranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponmissile1ranksbonus" title="weaponmissile1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponmissile1stat" title="weaponmissile1stat (Stat Bonus)" value="@{agbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponmissile1lvlbonus" title="weaponmissile1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponmissile1specialmod" title="weaponmissile1specialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponmissile1itemmod" title="weaponmissile1itemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_weaponmissile1macro" title="weaponmissile1macro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{weaponmissile1name}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{weaponmissile1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{weaponmissile1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_weaponmissile1check" title="weaponmissile1check" value="@{weaponmissile1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Pole Arms</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponpolearm1" title="weaponpolearm1" value="(@{weaponpolearm1ranksbonus}+@{weaponpolearm1stat}+@{weaponpolearm1lvlbonus}+@{weaponpolearm1specialmod}+@{weaponpolearm1itemmod})" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_weaponpolearm1ranks" title="weaponpolearm1ranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponpolearm1ranksbonus" title="weaponpolearm1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>St</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponpolearm1stat" title="weaponpolearm1stat (Stat Bonus)" value="@{stbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponpolearm1lvlbonus" title="weaponpolearm1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponpolearm1specialmod" title="weaponpolearm1specialmod (Any Special bonuses)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_weaponpolearm1itemmod" title="weaponpolearm1itemmod (Bonus modification from Item)" value="0"></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_weaponpolearm1macro" title="weaponpolearm1macro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{weaponpolearm1name}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{weaponpolearm1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{weaponpolearm1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_weaponpolearm1check" title="weaponpolearm1check" value="@{weaponpolearm1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Brawling</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_brawling" title="brawling" value="@{brawlingranksbonus}+@{brawlingstat}+@{brawlinglvlbonus}+@{brawlingspecialmod}+@{brawlingitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_brawlingranks" title="brawlingranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_brawlingranksbonus" title="brawlingranksbonus (Skill Rank Bonus)" value="-30"></span>
                                        <span class="sheet-table-data-skills-wide"><b>St/Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_brawlingstat" title="brawlingstat (Stat Bonus)" value="(@{stbonus}+@{agbonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_brawlinglvlbonus" title="brawlinglvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_brawlingspecialmod" title="brawlingspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_brawlingitemmod" title="brawlingitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_brawlingmacro" title="brawlingmacro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Brawling}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{brawling}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{brawling}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_brawlingcheck" title="brawlingcheck" value="@{brawlingmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Body Dev</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_bodydev" title="bodydev" value="10+@{bodydevranksbonus}+@{bodydevstat}+@{bodydevLvlbonus}+@{bodydevspecialmod}+@{bodydevitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_bodydevranks" title="bodydevranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_bodydevranksbonus" title="bodydevranksbonus (Skill Rank Bonus)" value="0" /></span>
                                        <span class="sheet-table-data-skills-wide"><b>Co</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_bodydevstat" title="bodydevstat (Stat Bonus)" value="@{cobonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_bodydevLvlbonus" title="bodydevLvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_bodydevspecialmod" title="bodydevspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_bodydevitemmod" title="bodydevitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm" style="width: 200px;"> </span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_bodydevcheck" title="bodydevcheck" value="Convince me there is a reason to roll a Body Dev check and I will put it in."></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Read Runes</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_readrunes" title="readrunes" value="@{readrunesranksbonus}+@{readrunesstat}+@{readruneslvlbonus}+@{readrunesspecialmod}+@{readrunesitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_readrunesranks" title="readrunesranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_readrunesranksbonus" title="readrunesranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Em/In</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_readrunesstat" title="readrunesstat (Stat Bonus)" value="(@{embonus}+@{inbonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_readruneslvlbonus" title="readruneslvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_readrunesspecialmod" title="readrunesspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_readrunesitemmod" title="readrunesitemmod (Bonus modification from Item)" value="0" /></span>
                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_readrunesmacro" title="readrunesmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Read Runes}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{readrunes}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{readrunes}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_readrunescheck" title="readrunescheck" value="@{readrunesmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Use Items</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_useitems" title="useitems" value="@{useitemsranksbonus}+@{useitemssstat}+@{useitemslvlbonus}+@{useitemsspecialmod}+@{useitemsitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_useitemsranks" title="useitemsranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_useitemsranksbonus" title="useitemsranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Em/In</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_useitemssstat" title="useitemsstat (Stat Bonus)" value="(@{embonus}+@{inbonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_useitemslvlbonus" title="useitemslvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_useitemsspecialmod" title="useitemsspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_useitemsitemmod" title="useitemsitemmod (Bonus modification from Item)" value="0" /></span>
                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_useitemsmacro" title="useitemsmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Use Items}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{useitems}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{useitems}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_useitemscheck" title="useitemscheck" value="@{useitemsmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Directed Spells</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_directedspells" title="directedspells" value="@{directedspellsranksbonus}+@{directedspellsstatbonus}+@{directedspellslvlbonus}+@{directedspellsspecialbonus}+@{directedspellsitembonus}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_directedspellsranks" title="directedspellsranks (Number of Ranks)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_directedspellsranksbonus" title="directedspellsranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_directedspellsstatbonus" title="directedspellsstatbonus" value="@{agbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_directedspellslvlbonus" title="directedspellslvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_directedspellsspecialbonus" title="directedspellsspecialbonus (Special bonus to category if applicable.)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_directedspellsitembonus" title="directed-spells-itembonus (Item bonus to category if applicable.)" value="0"></span>
                                        <span class="sheet-table-data-skills-sm" style="width: 200px;"> </span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_directedspellscheck" title="directedspellscheck" value="/w gm &{template:RMSSStdRoll} {{skillcatflag=true}} {{name=@{character_name}'s Directed Spells}} {{check=Check: }} {{checkroll=[[1d100!>96cs=100 +?{Other bonus/penalty?|0} +[[@{directedspells}]] ]]}} {{critroll= Nat 100! }} {{fumbleroll=Fumble! ([[d100]])}}" /></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Power Point Dev</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ppdev" title="ppdev" value="(@{ppdevranksbonus}+@{ppdevstat}+@{ppdevlvlbonus}+@{ppdevspecialmod}+@{ppdevitemmod})*(@{ppmult}) " disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_ppdevranks" title="ppdevranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ppdevranksbonus" title="ppdevranksbonus (Skill Rank Bonus)" value="0" /></span>
                                        <span class="sheet-table-data-skills-wide"><b>Realm</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ppdevstat" title="ppdevstat (Stat Bonus)" value="@{Realm}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ppdevlvlbonus" title="ppdevlvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ppdevspecialmod" title="ppdevspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ppdevitemmod" title="ppdevitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm" style="width: 200px;"> </span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_ppdevcheck" title="ppdevcheck" value="Convince me there is a reason to roll a Power Point Dev check and I will put it in."></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Channeling</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_channeling" title="channeling" value="@{channelingranksbonus}+@{channelingstat}+@{channelinglvlbonus}+@{channelingspecialmod}+@{channelingitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_channelingranks" title="channelingranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_channelingranksbonus" title="channelingranksbonus (Skill Rank Bonus)" value="-30"></span>
                                        <span class="sheet-table-data-skills-wide"><b>In</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_channelingstat" title="channelingstat (Stat Bonus)" value="@{inbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_channelinglvlbonus" title="channelinglvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_channelingspecialmod" title="channelingspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_channelingitemmod" title="channelingitemmod (Bonus modification from Item)" value="0" /></span>
                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_channelingmacro" title="channelingmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Channeling}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{channeling}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{channeling}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_channelingcheck" title="channelingcheck" value="@{channelingmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Move Soft</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_softleather" title="softleather" value="@{softleatherranksbonus}+@{softleatherstat}+@{softleatherlvlbonus}+@{softleatherspecialmod}+@{softleatheritemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_softleatherranks" title="softleatherranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_softleatherranksbonus" title="softleatherranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Qu</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_softleatherstat" title="softleatherstat (Stat Bonus)" value="@{qubonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_softleatherlvlbonus" title="softleatherlvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_softleatherspecialmod" title="softleatherspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_softleatheritemmod" title="softleatheritemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_softleathermacro" title="softleathermacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Move Soft}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{softleather}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{softleather}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_softleathercheck" title="softleathercheck" value="@{softleathermacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Move Rigid</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_rigidleather" title="rigidleather" value="@{rigidleatherranksbonus}+@{rigidleatherstat}+@{rigidleatherlvlbonus}+@{rigidleatherspecialmod}+@{rigidleatheritemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_rigidleatherranks" title="rigidleatherranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_rigidleatherranksbonus" title="rigidleatherranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Qu</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_rigidleatherstat" title="rigidleatherstat (Stat Bonus)" value="@{qubonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_rigidleatherlvlbonus" title="rigidleatherlvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_rigidleatherspecialmod" title="rigidleatherspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_rigidleatheritemmod" title="rigidleatheritemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_rigidleathermacro" title="rigidleathermacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Move Rigid}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{rigidleather}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{rigidleather}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_rigidleathercheck" title="rigidleathercheck" value="@{rigidleathermacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Move Chain</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_chain" title="chain" value="@{chainranksbonus}+@{chainstat}+@{chainlvlbonus}+@{chainspecialmod}+@{chainitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_chainranks" title="chainranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_chainranksbonus" title="chainranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_chainstat" title="chainstat (Stat Bonus)" value="@{agbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_chainlvlbonus" title="chainlvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_chainspecialmod" title="chainspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_chainitemmod" title="chainitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_chainmacro" title="chainmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Move Chain}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{chain}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{chain}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_chaincheck" title="chaincheck" value="@{chainmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Move Plate</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_plate" title="plate" value="@{plateranksbonus}+@{platestat}+@{platelvlbonus}+@{platespecialmod}+@{plateitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_plateranks" title="plateranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_plateranksbonus" title="plateranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_platestat" title="platestat (Stat Bonus)" value="@{agbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_platelvlbonus" title="platelvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_platespecialmod" title="platespecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_plateitemmod" title="plateitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_platemacro" title="platemacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Mpve Plate}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{plate}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{plate}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_platecheck" title="platecheck" value="@{platemacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">General Perceptions</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_generalpercept" title="generalpercept" value="@{generalperceptranksbonus}+@{generalperceptstatbonus}+@{generalperceptlvlbonus}+@{directedspellsspecialbonus}+@{generalperceptitembonus}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_generalperceptranks" title="generalperceptranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_generalperceptranksbonus" title="generalperceptranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>In/Re</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_generalperceptstatbonus" title="generalperceptstatbonus" value="(@{inbonus}+@{rebonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_generalperceptlvlbonus" title="generalperceptlvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_generalperceptspecialbonus" title="generalperceptspecialbonus (Special bonus to category if applicable.)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_generalperceptitembonus" title="generalperceptitembonus (Item bonus to category if applicable.)" value="0"></span>
                                        <span class="sheet-table-data-skills-sm" style="width: 200px;"> </span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_awarenessperceptionscheck" title="awarenessperceptionscheck" value="/w gm &{template:RMSSStdRoll} {{skillcatflag=true}} {{name=@{character_name}'s General Perceptions}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{generalpercept}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{generalpercept}]] ]]}} {{highlight66roll=**Natural 66.** }} "></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Pick Lock</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_picklocks" title="picklocks" value="@{picklocksranksbonus}+@{picklocksstat}+@{picklockslvlbonus}+@{picklocksspecialmod}+@{picklocksitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_picklocksranks" title="picklocksranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_picklocksranksbonus" title="picklocksranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>In/Re</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_picklocksstat" title="picklocksstat (Stat Bonus)" value="(@{inbonus}+@{rebonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_picklockslvlbonus" title="picklockslvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_picklocksspecialmod" title="picklocksspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_picklocksitemmod" title="picklocksitemmod (Bonus modification from Item)" value="0" /></span>
                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_picklocksmacro" title="picklocksmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Picking Locks}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{picklocks}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{picklocks}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_picklockscheck" title="picklockscheck" value="@{picklocksmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Disarm Trap</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_disarmingtraps" title="disarmingtraps" value="@{disarmingtrapsranksbonus}+@{disarmingtrapsstat}+@{disarmingtrapslvlbonus}+@{disarmingtrapsspecialmod}+@{disarmingtrapsitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_disarmingtrapsranks" title="disarmingtrapsranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_disarmingtrapsranksbonus" title="disarmingtrapsranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Sd</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_disarmingtrapsstat" title="disarmingtrapsstat (Stat Bonus)" value="@{sdbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_disarmingtrapslvlbonus" title="disarmingtrapslvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_disarmingtrapsspecialmod" title="disarmingtrapsspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_disarmingtrapsitemmod" title="disarmingtrapsitemmod (Bonus modification from Item)" value="0" /></span>
                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_disarmingtrapsmacro" title="disarmingtrapsmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Disarming Traps}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{disarmingtraps}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{disarmingtraps}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_disarmingtrapscheck" title="disarmingtrapscheck" value="@{disarmingtrapsmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Climbing</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_climbing" title="climbing" value="@{climbingranksbonus}+@{climbingstat}+@{climbinglvlbonus}+@{climbingspecialmod}+@{climbingitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_climbingranks" title="climbingranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_climbingranksbonus" title="climbingranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_climbingstat" title="climbingstat (Stat Bonus)" value="@{agbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_climbinglvlbonus" title="climbinglvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_climbingspecialmod" title="climbingspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_climbingitemmod" title="climbingitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_climbingmacro" title="climbingmacro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Climbing}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{climbing}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{climbing}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_climbingcheck" title="climbingcheck" value="@{climbingmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Swimming</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_swimming" title="swimming" value="@{swimmingranksbonus}+@{swimmingstat}+@{swimminglvlbonus}+@{swimmingspecialmod}+@{swimmingitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_swimmingranks" title="swimmingranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_swimmingranksbonus" title="swimmingranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_swimmingstat" title="swimmingstat (Stat Bonus)" value="@{agbonus}" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_swimminglvlbonus" title="swimminglvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_swimmingspecialmod" title="swimmingspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_swimmingitemmod" title="swimmingitemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_swimmingmacro" title="swimmingmacro">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Swimming}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{swimming}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{swimming}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_swimmingcheck" title="swimmingcheck" value="@{swimmingmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Ride</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_riding1" title="riding1" value="@{riding1ranksbonus}+@{riding1stat}+@{riding1lvlbonus}+@{riding1specialmod}+@{riding1itemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_riding1ranks" title="riding1ranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_riding1ranksbonus" title="riding1ranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Em/Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_riding1stat" title="riding1stat (Stat Bonus)" value="(@{embonus}+@{agbonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_riding1lvlbonus" title="riding1lvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_riding1specialmod" title="riding1specialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_riding1itemmod" title="riding1itemmod (Bonus modification from Item)" value="0" /></span>
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_riding1macro" title="riding1macro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Riding (@{riding1name})}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{riding1}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{riding1}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_riding1check" title="riding1check" value="@{riding1macro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Stalk/Hide</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_stalking" title="stalking" value="@{stalkingranksbonus}+@{stalkingstat}+@{stalkinglvlbonus}+@{stalkingspecialmod}+@{stalkingitemmod}" disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_stalkingranks" title="stalkingranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_stalkingranksbonus" title="stalkingranksbonus (Skill Rank Bonus)" value="-15"></span>
                                        <span class="sheet-table-data-skills-wide"><b>Sd/Ag</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_stalkingstat" title="stalkingstat (Stat Bonus)" value="(@{sdbonus}+@{agbonus})/2" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_stalkinglvlbonus" title="stalkinglvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_stalkingspecialmod" title="stalkingspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_stalkingitemmod" title="stalkingitemmod (Bonus modification from Item)" value="0" /></span>

                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_stalkingmacro" title="stalkingmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Stalk/Hide}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{stalking}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{stalking}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_stalkingcheck" title="stalkingcheck" value="@{stalkingmacro}"></button></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-skills-name">Ambush</span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ambush" title="ambush" value="(@{ambushranksbonus}+@{ambushlvlbonus}+@{ambushspecialmod}+@{ambushitemmod}) " disabled></span>
                                        <span class="sheet-table-data-skills-wide"><input type="text" name="attr_ambushranks" title="ambushranks (Number of Ranks)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ambushranksbonus" title="ambushranksbonus (Skill Rank Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills-wide" style="vertical-align:bottom;"><b>None</b></span>
                                        <span class="sheet-table-data-skills"><input type="text" rank name="attr_ambushstat" title="senseambushstat (Stat Bonus)" value="0" disabled></span>
                                        <span class="sheet-table-data-skills"><input type="text" rank name="attr_ambushlvlbonus" title="ambushlvlbonus (Level Bonus)" value="0"></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ambushspecialmod" title="ambushspecialmod (Any Special bonuses)" value="0" /></span>
                                        <span class="sheet-table-data-skills"><input type="text" name="attr_ambushitemmod" title="ambushitemmod (Bonus modification from Item)" value="0" /></span>
                                        
                                        <span class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_ambushmacro" title="ambushmacro">/w gm &{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s Sense Ambush}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{ambush}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{ambush}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></span>
                                        <span class="sheet-table-data-skills-sm"><button type="roll" name="attr_ambushcheck" title="ambushcheck" value="@{ambushmacro}"></button></span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <table>
                            <input type="checkbox" class="sheet-pc-skillother-show sheet-arrow" title="skillother-show" name="attr_skillother-show" value="1" checked />
                            <span></span>
                            <td class="sheet-statlabel-big" style="width: 900px;">Other Skills</td>
                        </table>
                        <div class="sheet-pc-skillother">
                            <table>
                                <tr>
                                    <td>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-header2" style="width: 200px;">Skill</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Total<br>Bonus</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Ranks</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Rank<br>Bonus</span>
                                            <span class="sheet-table-header2" style="width: 62px;">Stat</span>
                                            <span class="sheet-table-header2" style="width: 62px;">Stat<br>Secondary</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Stat<br>Bonus</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Level<br>Bonus</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Special<br>Bonus</span>
                                            <span class="sheet-table-header2" style="width: 37px;">Item<br>Bonus</span>
                                            <span class="sheet-table-header2" style="width: 200px;">Macro</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <fieldset class="repeating_skills">
                                <table style="width: 800px;" class="sheet-table-row">
                                    <tr>
                                        <td><input type="text" style="width: 200px;" name="attr_skillname" title="repeating_skills_#_skillname" /></td>
                                        <td><input type="text" style="width: 35px;" name="attr_skill" title="repeating_skills_#_skill" value="@{skillranksbonus}+@{skillstatbonus}+@{skilllvlbonus}+@{skillspecialmod}+@{skillitemmod}" disabled /></td>
                                        <td><input type="text" style="width: 35px;" name="attr_skillranks" title="repeating_skills_#_skillranks (Number of Ranks)" value="0" /></td>
                                        <td><input type="text" style="width: 35px;" name="attr_skillranksbonus" title="repeating_skills_#_skillranksbonus" value="0" /></td>
                                        <td>
                                            <span class="sheet-table-data-skills-wide">
                                                <select style="width: 48px; margin-bottom: 0;" name="attr_skillstatnames1" title="repeating_skills_#_skillstatnames1">
                                                    <option value="1">St</option>
                                                    <option value="2">Ag</option>
                                                    <option value="3">Qu</option>
                                                    <option value="4">Co</option>
                                                    <option value="5">Me</option>
                                                    <option value="6">Re</option>
                                                    <option value="7">Sd</option>
                                                    <option value="8">Em</option>
                                                    <option value="9">In</option>
                                                    <option value="10">Pr</option>
                                                </select>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="sheet-table-data-skills-wide">
                                                <select style="width: 48px; margin-bottom: 0;" name="attr_skillstatnames2" title="repeating_skills_#_skillstatnames2">
                                                    <option value="0" selected>None</option>
                                                    <option value="1">St</option>
                                                    <option value="2">Ag</option>
                                                    <option value="3">Qu</option>
                                                    <option value="4">Co</option>
                                                    <option value="5">Me</option>
                                                    <option value="6">Re</option>
                                                    <option value="7">Sd</option>
                                                    <option value="8">Em</option>
                                                    <option value="9">In</option>
                                                    <option value="10">Pr</option>
                                                </select>
                                            </span>
                                        </td>
                                        <td><input type="text" style="width: 35px;" name="attr_skillstatbonus" title="repeating_skills_#_skillstatbonus" readonly></td>
                                        <td><input type="text" style="width: 35px;" name="attr_skilllvlbonus" title="repeating_skills_#_skilllvlbonus (Level Bonus)" value="0"></td>
                                        <td><input type="text" style="width: 35px;" name="attr_skillspecialmod" title="repeating_skills_#_skillspecialmod (Any Special bonuses)" value="0" /></td>
                                        <td><input type="text" style="width: 35px;" name="attr_skillitemmod" title="repeating_skills_#_skillitemmod (Bonus modification from Item)" value="0" /></td>
                                        <td class="sheet-table-data-skills-sm"><textarea rows="1" cols="50" style="width: 200px; height: 19px; margin-bottom: 0;" name="attr_skill-macro" title="repeating_skills_#_skill-macro (but it won't work in an ability....)">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name}'s @{skillname}}} {{check=Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +?{Other bonus/penalty?|0} +[[@{skill}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +?{Other bonus/penalty?|0} +[[@{skill}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea></td>
                                        <td class="sheet-table-data-skills-sm"><button type="roll" name="Skillcheck" title="Skillcheck" value="@{skill-macro}"></button></td>
                                    </tr>
                                </table>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </label>
            <div class="sheet-character-sheet sheet-show">
                
                <table>
                    <input type="checkbox" class="sheet-pc-points-show sheet-arrow" title="points-show" name="attr_points-show" value="1" checked />
                    <span></span>
                    <td class="sheet-statlabel-big" style="width: 900px;">Hit/Power/Exh Points; Initiative</td>
                </table>
                <div class="sheet-pc-points">
                    <table>
                        <tr>
                            <td style="width: 50%">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header">Hit Points: </span>
                                    <span class="sheet-table-data"><input type="text" name="attr_hitpoints" title="hitpoints" value="0" style="width: 45px; text-align:right;"></span>
                                    <span class="sheet-table-data">/</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_hitpoints_max" title="hitpoints|max" value="@{bodydev}" style="width: 45px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; &nbsp; </span>
                                </div><br>
                                <div>
                                    <span class="sheet-table-data"> 75%: <input type="text" name="attr_hitpoints-75" title="hitpoints-75" value="((@{bodydev})*.75)" style="width: 35px;" disabled></span><br>
                                    <span class="sheet-table-data"> 50%: <input type="text" name="attr_hitpoints-50" title="hitpoints-50" value="((@{bodydev})*.5)" style="width: 35px;" disabled></span><br>
                                    <span class="sheet-table-data"> 25%: <input type="text" name="attr_hitpoints-25" title="hitpoints-25" value="((@{bodydev})*.25)" style="width: 35px;" disabled></span><br>
                                </div>
                                <div> <br> </div>
                                <div>
                                    <span class="sheet-table-data">Rnds stun b4 unc: </span>
                                    <span class="sheet-table-data"><input type="text" name="attr_stunpoints" title="stunpoints" style="width: 45px; text-align:right;"></span>
                                    <span class="sheet-table-data">/</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_stunpoints_max" title="stunpoints|max" value="10+2*@{cobonus}" disabled style="width: 45px;"></span>
                                </div>
                            </td>
                            <td style="width: 50%">
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header">Power Points:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_powerpoints" title="powerpoints" style="width: 45px; text-align:right;"></span>
                                    <span class="sheet-table-data">/</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_powerpoints_max" title="powerpoints|max" value="@{ppdev}" style="width: 45px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; &nbsp; </span>
                                </div><br>
                                <div>
                                    <span class="sheet-table-data"> 75% (-10): <input type="text" name="attr_powerpoints-75" title="powerpoints-75" value="((@{ppdev})*.75)" style="width: 35px;" disabled></span><br>
                                    <span class="sheet-table-data"> 50% (-20): <input type="text" name="attr_powerpoints-50" title="powerpoints-50" value="((@{ppdev})*.5)" style="width: 35px;" disabled></span><br>
                                    <span class="sheet-table-data"> 25% (-30): <input type="text" name="attr_powerpoints-25" title="powerpoints-25" value="((@{ppdev})*.25)" style="width: 35px;" disabled></span><br>
                                </div>
                                <div> <br> </div>
                                <div>
                                    <span class="sheet-table-data"> &nbsp; PP Mult: </span>
                                    <span class="sheet-table-data"><input type="text" name="attr_ppmult" title="ppmult" value="1" style="width: 40px;"></span>
                                    <span class="sheet-table-data"> &nbsp; Adder: </span>
                                    <span class="sheet-table-data"><input type="text" name="attr_ppadder" title="ppadder" value="0" style="width: 40px;"></span>
                                    <span class="sheet-table-data">/ used: </span>
                                    <span class="sheet-table-data"><input type="text" name="attr_ppadderused" title="ppadderused" value="0" style="width: 40px;"></span>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <hr />
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-header">Exhaustion Points: </span>
                                        <span class="sheet-table-data"><input type="text" name="attr_exhaustionpoints" title="exhaustionpoints" style="width: 45px;" value="1"></span>
                                        <span class="sheet-table-data">/</span>
                                        <span class="sheet-table-data"><input type="text" name="attr_exhaustionpoints_max" title="exhaustionpoints|max" value="40+(3*@{cobonus})+@{exhaustmiscbonus}" style="width: 45px;" disabled></span>
                                        <span class="sheet-table-data"> &nbsp; Bonus Exhaust. Points:</span>
                                        <span class="sheet-table-data"><input type="text" name="attr_exhaustmiscbonus" title="exhaustmiscbonus" style="width: 30px;" value="0"></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-header" style="vertical-align: middle;">Exh. Pts Remaining: </span>
                                        <span class="sheet-table-data"> more than 75%:<input type="text" name="attr_exhaustionpoints-75" title="exhaustionpoints-75" value="((@{exhaustionpoints|max})*.75)" style="width: 35px;" disabled>= 0; &nbsp; </span>
                                        <span class="sheet-table-data"> more than 50%:<input type="text" name="attr_exhaustionpoints-50" title="exhaustionpoints-50" value="((@{exhaustionpoints|max})*.5)" style="width: 35px;" disabled>= -5; &nbsp; </span>
                                        <span class="sheet-table-data"> more than 25%:<input type="text" name="attr_exhaustionpoints-25" title="exhaustionpoints-25" value="((@{exhaustionpoints|max})*.25)" style="width: 35px;" disabled>= -15; &nbsp; </span>
                                        <br>
                                        <span class="sheet-table-data"> more than 10%:<input type="text" name="attr_exhaustionpoints-10" title="exhaustionpoints-10" value="((@{exhaustionpoints|max})*.10)" style="width: 35px;" disabled>= -30; &nbsp; </span>
                                        <span class="sheet-table-data"> more than 1%:<input type="text" name="attr_exhaustionpoints-1" title="exhaustionpoints-1" value="((@{exhaustionpoints|max})*.01)" style="width: 35px;" disabled>= -60; &nbsp; </span>
                                        <span class="sheet-table-data"> 0%:<input type="text" name="attr_exhaustionpoints-0" title="exhaustionpoints-0" value="0" style="width: 35px;" disabled>= -100</span>
                                    </div>
                                    
                                        <span class="sheet-table-header">Exhaustion Points used: </span>
                                        <span class="sheet-table-data"> 0-25%:<input type="text" name="attr_exhaustionpoints-75" title="exhaustionpoints-75 (ep*.25)" value="((@{exhaustionpoints|max})*.25)" style="width: 35px;" disabled>= 0; &nbsp; </span>
                                        <span class="sheet-table-data"> 26-50%:<input type="text" name="attr_exhaustionpoints-50" title="exhaustionpoints-50 (ep*.5)" value="((@{exhaustionpoints|max})*.5)" style="width: 35px;" disabled>= -5; &nbsp; </span>
                                        <span class="sheet-table-data"> 51-75%:<input type="text" name="attr_exhaustionpoints-25" title="exhaustionpoints-25 (ep*.75)" value="((@{exhaustionpoints|max})*.75)" style="width: 35px;" disabled>= -15; &nbsp; </span>
                                        <span class="sheet-table-data"> 76-90%:<input type="text" name="attr_exhaustionpoints-10" title="exhaustionpoints-10 (ep*.9)" value="((@{exhaustionpoints|max})*.90)" style="width: 35px;" disabled>= -30; &nbsp; </span>
                                        <span class="sheet-table-data"> 91-99%:<input type="text" name="attr_exhaustionpoints-1" title="exhaustionpoints-1 (ep*.99)" value="((@{exhaustionpoints|max})*.99)" style="width: 35px;" disabled>= -60; &nbsp; </span>
                                        <span class="sheet-table-data"> 100%:<input type="text" name="attr_exhaustionpoints-0" title="exhaustionpoints-0(max ep)" value="((@{exhaustionpoints|max})*1)" style="width: 35px;" disabled>= -100</span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr />
                        <br>
                        <table>
                            <tr>
                                <td class="sheet-table-header">Initiative: </td>
                                <td class="sheet-table-data"><input type="text" name="attr_initbonus" title="initbonus" value="@{qubonus} +@{initmiscbonus} " style="width: 40px;" disabled></td>
                                <td class="sheet-table-data">= Qu bonus</td>
                                <td class="sheet-table-data"><input type="text" name="attr_initqubonus" title="initqubonus" value="@{qubonus}" style="width: 40px;" disabled></td>
                                <td class="sheet-table-data"> + Init bonus</td>
                                <td class="sheet-table-data"><input type="text" name="attr_initmiscbonus" title="initmiscbonus" value="0" style="width: 40px;"></td>
                                <td><textarea rows="1" style="width: 235px; height: 19px; margin-bottom: 0;" name="attr_initiative" title="initiative">&{template:RMSSInitiative} {{name=@{selected|token_name}'s }} {{check=initiative roll: }}{{checkroll=[[2d10 + [[@{initbonus}]] &{tracker} ]] }} </textarea></td>
                                <td><button class="tokenaction" type="roll" name="attr_initroll" title="initroll" value="@{initiative}"></button></td>
                            </tr>
                        </table>
                        <hr />
                    </div>
                </div>
                <div class="sheet-2colrow">
                    <div class="sheet-col">
                        <table>
                            <input type="checkbox" class="sheet-pc-armor-show sheet-arrow" title="armor-show" name="attr_armor-show" value="1" checked />
                            <span></span>
                            <td class="sheet-statlabel-big" style="width: 900px;">Armor</td>
                        </table>
                        <div class="sheet-pc-armor">
                            <table border="0">
                                <tr>
                                    <td>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center"> &nbsp; </span>
                                            <span class="sheet-table-data-center">Worn</span>
                                            <span class="sheet-table-data-center">Primary</span>
                                            <span class="sheet-table-data-center">Secondary</span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Armor Type:</span>
                                            <span class="sheet-table-data-center">
                                                <select style="width: 55px; vertical-align:top; margin-bottom: 0;" name="attr_atworn" title="atworn">
                                                    <option value="1" selected>1 - Skin/Cloth</option>
                                                    <option value="2">2 - Robes</option>
                                                    <option value="3">3 - Light Hide</option>
                                                    <option value="4">4 - Heavy Hide</option>
                                                    <option value="5">5 - Leather Jerkin</option>
                                                    <option value="6">6 - Leather Coat</option>
                                                    <option value="7">7 - Reinforced Leather Coat</option>
                                                    <option value="8">8 - Rein. Full-Length Leather Coat</option>
                                                    <option value="9">9 - Rigid Leather Breastplate</option>
                                                    <option value="10">10 - Rigid Leather Breastplate & Greaves</option>
                                                    <option value="11">11 - Half-Hide Plate</option>
                                                    <option value="12">12 - Full-Hide Plate</option>
                                                    <option value="13">13 - Chain Shirt</option>
                                                    <option value="14">14 - Chain Shirt & Greaves</option>
                                                    <option value="15">15 - Full Chain</option>
                                                    <option value="16">16 - Chain Hauberk</option>
                                                    <option value="17">17 - Metal Breastplate</option>
                                                    <option value="18">18 - Metal Breastplate & Greaves</option>
                                                    <option value="19">19 - Half Plate</option>
                                                    <option value="20">20 - Full Plate</option>
                                                </select>
                                            </span>
                                            <span class="sheet-table-data-center">
                                                <select style="width: 55px; vertical-align:top; margin-bottom: 0;" name="attr_at1" title="at1">
                                                    <option value="1" selected>1 - Skin/Cloth</option>
                                                    <option value="2">2 - Robes</option>
                                                    <option value="3">3 - Light Hide</option>
                                                    <option value="4">4 - Heavy Hide</option>
                                                    <option value="5">5 - Leather Jerkin</option>
                                                    <option value="6">6 - Leather Coat</option>
                                                    <option value="7">7 - Reinforced Leather Coat</option>
                                                    <option value="8">8 - Rein. Full-Length Leather Coat</option>
                                                    <option value="9">9 - Rigid Leather Breastplate</option>
                                                    <option value="10">10 - Rigid Leather Breastplate & Greaves</option>
                                                    <option value="11">11 - Half-Hide Plate</option>
                                                    <option value="12">12 - Full-Hide Plate</option>
                                                    <option value="13">13 - Chain Shirt</option>
                                                    <option value="14">14 - Chain Shirt & Greaves</option>
                                                    <option value="15">15 - Full Chain</option>
                                                    <option value="16">16 - Chain Hauberk</option>
                                                    <option value="17">17 - Metal Breastplate</option>
                                                    <option value="18">18 - Metal Breastplate & Greaves</option>
                                                    <option value="19">19 - Half Plate</option>
                                                    <option value="20">20 - Full Plate</option>
                                                </select>
                                            </span>
                                            <span class="sheet-table-data-center">
                                                <select style="width: 55px; vertical-align:top; margin-bottom: 0;" name="attr_at2" title="at2">
                                                    <option value="1" selected>1 - Skin/Cloth</option>
                                                    <option value="2">2 - Robes</option>
                                                    <option value="3">3 - Light Hide</option>
                                                    <option value="4">4 - Heavy Hide</option>
                                                    <option value="5">5 - Leather Jerkin</option>
                                                    <option value="6">6 - Leather Coat</option>
                                                    <option value="7">7 - Reinforced Leather Coat</option>
                                                    <option value="8">8 - Rein. Full-Length Leather Coat</option>
                                                    <option value="9">9 - Rigid Leather Breastplate</option>
                                                    <option value="10">10 - Rigid Leather Breastplate & Greaves</option>
                                                    <option value="11">11 - Half-Hide Plate</option>
                                                    <option value="12">12 - Full-Hide Plate</option>
                                                    <option value="13">13 - Chain Shirt</option>
                                                    <option value="14">14 - Chain Shirt & Greaves</option>
                                                    <option value="15">15 - Full Chain</option>
                                                    <option value="16">16 - Chain Hauberk</option>
                                                    <option value="17">17 - Metal Breastplate</option>
                                                    <option value="18">18 - Metal Breastplate & Greaves</option>
                                                    <option value="19">19 - Half Plate</option>
                                                    <option value="20">20 - Full Plate</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">% Weight</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbpweightworn" title="dbpweightworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbpweight1" title="dbpweight1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbpweight2" title="dbpweight2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Weight Penalty</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbweightpenworn" title="dbweightpenworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbweightpen1" title="dbweightpen1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbweightpen2" title="dbweightpen2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Missile Penalty</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbmisspenworn" title="dbmisspenworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbmisspen1" title="dbmisspen1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbmisspen2" title="dbmisspen2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Armor DB Bonus</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbarmdbworn" title="dbarmdbworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbarmdb1" title="dbarmdb1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbarmdb2" title="dbarmdb2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Quickness Penalty</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbquickpenworn" title="dbquickpenworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbquickpen1" title="dbquickpen1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbquickpen2" title="dbquickpen2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Quickness Bonus</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbquickbonworn" title="dbquickbonworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbquickbon1" title="dbquickbon1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbquickbon2" title="dbquickbon2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Adrenal Defense</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_adworn" title="adworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_ad1" title="ad1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_ad2" title="ad2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Shield (melee)</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbshieldworn" title="dbshieldworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbshield1" title="dbshield1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbshield2" title="dbshield2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Vs Evil Spell Casters (RR/DB)</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbvsspellworn" title="dbvsspellworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbvsspell1" title="dbvsspell1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbvsspell2" title="dbvsspell2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Other Magic Bonus</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbmagicbonworn" title="dbmagicbonworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbmagicbon1" title="dbmagicbon1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbmagicbon2" title="dbmagicbon2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Parry</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbparryworn" title="dbparryworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbparrybon1" title="dbparrybon1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbparrybon2" title="dbparrybon2" value="0"> </span>
                                        </div>
                                        <div class="sheet-table-row">
                                            <span class="sheet-table-data-center" style="width: 50%;">Total DB:</span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_dbworn" title="dbworn" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_db1" title="db1" value="0"> </span>
                                            <span class="sheet-table-data-center"><input type="text" style="width: 60%;" name="attr_db2" title="db2" value="0"> </span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <hr />
                        </div>
                    </div>
                    <div class="sheet-col">
                        <table>
                            <input type="checkbox" class="sheet-pc-resistances-show sheet-arrow" title="resistances-show" name="attr_resistances-show" value="1" checked />
                            <span></span>
                            <td class="sheet-statlabel-big" style="width: 900px;">Resistances</td>
                        </table>
                        <div class="sheet-pc-resistances">
                            <table border="0">
                                <tr>
                                    <td>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center"> &nbsp; </td>
                                    <td class="sheet-table-data-center">Stat</td>
                                    <td class="sheet-table-data-center">Race</td>
                                    <td class="sheet-table-data-center">Spec</td>
                                    <td class="sheet-table-data-center">Total</td>
                                </tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Essence (Em)</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_esssavestat" title="esssavestat (Stat Bonus)" value="@{embonus}" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_esssaverace" title="esssaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_esssavespec" title="esssavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_esssave" title="esssave" value="(@{esssavestat}+@{esssaverace}+@{esssavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_essence-save" title="essence-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Essence}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{esssave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_esssaveroll" title="esssaveroll" value="@{essence-save}" style="width: 20px;"></button></td>
                                </tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Channeling (In)</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_chansavestat" title="chansavestat (Stat Bonus)" value="@{inbonus}" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_chansaverace" title="chansaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_chansavespec" title="chansavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_chansave" title="chansave" value="(@{chansavestat}+@{chansaverace}+@{chansavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_channeling-save" title="channeling-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Channeling}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{chansave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_chansaveroll" title="chansaveroll" value="@{channeling-save}" style="width: 20px;"></button></td>
                                </tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Mentalism (Pr)</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_mentsavestat" title="mentsavestat (Stat Bonus)" value="@{prbonus}" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_mentsaverace" title="mentsaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_mentsavespec" title="mentsavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_mentsave" title="mentsave" value="(@{mentsavestat}+@{mentsaverace}+@{mentsavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_mentalism-save" title="mentalism-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Mentalism}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{mentsave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_mentsaveroll" title="mentsaveroll" value="@{mentalism-save}" style="width: 20px;"></button></td>
                                </tr>
                                <tr class="sheet-table-row" style="height: 1px; font-size: 0.1em;"><td class="sheet-table-data-center-sm" style="height: 1px; font-size: 0.1em;"> -------</td></tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Disease (Co)</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_diseasesavestat" title="diseasesavestat (Stat Bonus)" value="@{cobonus}" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_diseasesaverace" title="diseasesaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_diseasesavespec" title="diseasesavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_diseasesave" title="diseasesave" value="(@{diseasesavestat}+@{diseasesaverace}+@{diseasesavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_disease-save" title="disease-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Disease}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{diseasesave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_diseasesaveroll" title="diseasesaveroll" value="@{disease-save}" style="width: 20px;"></button></td>
                                </tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Fear (Sd)</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_fearsavestat" title="fearsavestat (Stat Bonus)" value="@{sdbonus}" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_fearsaverace" title="fearsaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_fearsavespec" title="fearsavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_fearsave" title="fearsave" value="(@{fearsavestat}+@{fearsaverace}+@{fearsavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_fear-save" title="fear-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Fear}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{fearsave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_fearsaveroll" title="fearsaveroll" value="@{fear-save}" style="width: 20px;"></button></td>
                                </tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Poison</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_poisonsavestat" title="poisonsavestat (Stat Bonus)" value="0" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_poisonsaverace" title="poisonsaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_poisonsavespec" title="poisonsavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_poisonsave" title="poisonsave" value="(@{poisonsavestat}+@{poisonsaverace}+@{poisonsavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_poison-save" title="poison-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Poison}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{poisonsave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_poisonsaveroll" title="poisonsaveroll" value="@{poison-save}" style="width: 20px;"></button></td>
                                </tr>
                                <tr class="sheet-table-row">
                                    <td class="sheet-table-data-center">Will (Re/SD/Em/In/Pr)</td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_willsavestat" title="willsavestat" value="(@{rebonus}+@{sdbonus}+@{embonus}+@{inbonus}+@{prbonus})" disabled></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_willsaverace" title="willsaverace" value="0"></td>
                                    <td class="sheet-table-data-center-saves"><input type="text" name="attr_willsavespec" title="willsavespec" value="0"></td>
                                    <td class="sheet-table-data-center">=<input style="width: 35px;" type="text" name="attr_willsave" title="willsave" value="(@{willsavestat}+@{willsaverace}+@{willsavespec})" disabled></td>
                                    <td><textarea rows="1" style="width: 35px; height: 19px; margin-bottom: 0;" name="attr_will-save" title="will-save">/w gm &{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} vs Will}} {{check=Resistance roll: }} {{checkroll=[[1d100!>96cf<5 +[[@{willsave}]] ]]}} </textarea></td>
                                    <td><button type="roll" name="attr_willsaveroll" title="willsaveroll" value="@{will-save}" style="width: 20px;"></button></td>
                                </tr>
                            </table>
                            <hr />
                        </div>
                    </div>
                </div>
                <table>
                    <input type="checkbox" class="sheet-pc-attacks-show sheet-arrow" title="attacks-show" name="attr_attacks-show" value="1" checked />
                    <span></span>
                    <td class="sheet-statlabel-big" style="width: 900px;">Attacks</td>
                </table>
                <div class="sheet-pc-attacks">
                    <table border="0">
                        <tr>
                            <td> <div style="font-weight: bold; width: 140px;">Attack/Weapon</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Type</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">OB</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Fumble</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Str</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">B#</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Range</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Macro</div></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack1name" title="attack1name" value="Attack Name"></td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack1type" title="attack1type">
                                    
                                    <option type="text" value="[[1d100!>96+@{attack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]] (fumble on [[1d1*@{attack1fumble}+@{attack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]] or less)">Ranged</option>
                                    <option type="text" value="[[1d100+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]] (spell failure on [[1d1*2+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]] or less)">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96+@{attack1bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]] (spell failure on [[1d1*2+@{attack1bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]] or less)">Directed Spell</option>
                                    <option type="text" value="[[1d100!>96+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]] (spell failure on [[1d1*4+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]] or less)">Area Spell</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack1fumble}+@{attack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack1fumble}+@{attack1bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack1bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack1bonus" title="attack1bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack1fumble" title="attack1fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack1str" title="attack1str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack1breakage" title="attack1breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack1range" title="attack1range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack1macro" title="attack1macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack1name}}} {{attackname1=Attack: }} {{attackroll1=@{attack1type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack1" title="attack1" value="@{attack1macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack2name" title="attack2name" value="Attack Name"></td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack2type" title="attack2type">
                                    <option type="text" value="[[1d100!>96cf<@{attack2fumble}+@{attack2bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack2fumble}+@{attack2bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack2bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack2bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack2bonus" title="attack2bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack2fumble" title="attack2fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack2str" title="attack2str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack2breakage" title="attack2breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack2range" title="attack2range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack2macro" title="attack2macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack2name}}} {{attackname1=Attack: }} {{attackroll1=@{attack2type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack2" title="attack2" value="@{attack2macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack3name" title="attack3name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack3type" title="attack3type">
                                    <option type="text" value="[[1d100!>96cf<@{attack3fumble}+@{attack3bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack3fumble}+@{attack3bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack3bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack3bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack3bonus" title="attack3bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack3fumble" title="attack3fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack3str" title="attack3str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack3breakage" title="attack3breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack3range" title="attack3range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack3macro" title="attack3macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack3name}}} {{attackname1=Attack: }} {{attackroll1=@{attack3type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack3" title="attack3" value="@{attack3macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack4name" title="attack4name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack4type" title="attack4type">
                                    <option type="text" value="[[1d100!>96cf<@{attack4fumble}+@{attack4bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack4fumble}+@{attack4bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack4bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack4bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack4bonus" title="attack4bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack4fumble" title="attack4fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack4str" title="attack4str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack4breakage" title="attack4breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack4range" title="attack4range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack4macro" title="attack4macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack4name}}} {{attackname1=Attack: }} {{attackroll1=@{attack4type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack4" title="attack4" value="@{attack4macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack5name" title="attack5name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack5type" title="attack5type">
                                    <option type="text" value="[[1d100!>96cf<@{attack5fumble}+@{attack5bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack5fumble}+@{attack5bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack5bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack5bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack5bonus" title="attack5bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack5fumble" title="attack5fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack5str" title="attack5str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack5breakage" title="attack5breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack5range" title="attack5range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack5macro" title="attack5macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack5name}}} {{attackname1=Attack: }} {{attackroll1=@{attack5type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack5" title="attack5" value="@{attack5macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack6name" title="attack6name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack6type" title="attack6type">
                                    <option type="text" value="[[1d100!>96cf<@{attack6fumble}+@{attack6bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack6fumble}+@{attack6bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack6bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack6bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack6bonus" title="attack6bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack6fumble" title="attack6fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack6str" title="attack6str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack6breakage" title="attack6breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack6range" title="attack6range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack6macro" title="attack6macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack6name}}} {{attackname1=Attack: }} {{attackroll1=@{attack6type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack4" title="attack6" value="@{attack6macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack7name" title="attack7name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack7type" title="attack7type">
                                    <option type="text" value="[[1d100!>96cf<@{attack7fumble}+@{attack7bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack7fumble}+@{attack7bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack7bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack7bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack7bonus" title="attack7bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack7fumble" title="attack7fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack7str" title="attack7str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack7breakage" title="attack7breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack7range" title="attack7range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack7macro" title="attack7macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack7name}}} {{attackname1=Attack: }} {{attackroll1=@{attack7type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack7" title="attack7" value="@{attack7macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_attack8name" title="attack8name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_attack8type" title="attack8type">
                                    <option type="text" value="[[1d100!>96cf<@{attack8fumble}+@{attack8bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})[% Action]]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{attack8fumble}+@{attack8bonus}[Att Bonus]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]-@{dbmisspenworn}[Missile Penalty for arm covering]-(60-?{% Activity used on attack|60})[% Action] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{attack8bonus}[List Ranks]+?{Special Item Bonus?|0}+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{attack8bonus}[Att Bonus]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{attack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Special Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack8bonus" title="attack8bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack8fumble" title="attack8fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack8str" title="attack8str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack8breakage" title="attack8breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_attack8range" title="attack8range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_attack8macro" title="attack8macro">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name}'s @{attack8name}}} {{attackname1=Attack: }} {{attackroll1=@{attack8type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit:}} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_attack8" title="attack8" value="@{attack8macro}" style="width: 20px;"></button> </td>
                        </tr>
                    </table>
                    <hr />
                </div>
            </div>
        </label>
        <div class="sheet-character-sheet sheet-show">
            
            
              <div class="sheet-col">
                <br>
            <table border="0">
                <tbody>
                    <tr>
                        <td>Character Name:</td>
                        <td><input type="text" name="attr_character_name" title="character|name (first name; same as name under Bio & Info tab)"></td>
                        <td colspan="2"><input type="text" name="attr_surname" title="surname (rest of name)"></td>
                    </tr>
                    <tr>
                        <td>Nickname:</td>
                        <td><input type="text" name="attr_nickname" title="nickname"></td>
                        <td>Title(s):</td>
                        <td colspan="3"><input type="text" name="attr_chartitles" title="chartitles"></td>
                    </tr>
                    <tr>
                        <td>Homeland:</td>
                        <td><input type="text" name="attr_homeland" title="homeland"></td>
                        <td> Player:</td>
                        <td><input type="text" name="attr_playername" title="playername"></td>
                    </tr>
                    <tr>
                        <td>Race:</td>
                        <td>
                            <input type="text" name="attr_race" title="race">
                        </td>
                        <td> Culture:</td>
                        <td>
                            <input type="text" name="attr_culture" title="culture">
                        </td>
                    </tr>
                    <tr>
                        <td>Profession:</td>
                        <td><input type="text" name="attr_profession" title="profession"></td>
                        <td>Realm:</td>
                        <td>
                            <select style="margin-bottom: 0;" name="attr_realm" title="realm">
                                <option value="@{inbonus}" selected>Channeling</option>
                                <option value="@{embonus}">Essence</option>
                                <option value="@{prbonus}">Mentalism</option>
                                <option value="round(@{inbonus}+@{embonus})/2">Chan/Ess</option>
                                <option value="round(@{inbonus}+@{prbonus})/2">Chan/Ment</option>
                                <option value="round(@{embonus}+@{prbonus})/2">Ess/Ment</option>
                                <option value="round(@{inbonus}+@{embonus}+@{prbonus})/3">Arcane</option>
                            </select>
                        </td>
                    </tr>
                    <tr> <td>Deity:</td><td><input type="text" name="attr_deity" title="deity"></td> </tr>
                    <tr>
                        <td>Level:</td>
                        <td><input type="text" name="attr_level" title="level" value="0"></td>
                        <td>Exp:</td>
                        <td><input type="text" name="attr_expcurrent" title="expcurrent" style="width: 48%;">/<input type="text" name="attr_expcurrent_max" title="expcurrent|max" style="width: 48%;"></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            
            </div>
            <div class="sheet-2colrow">
                <div class="sheet-col">
                    <table>
                        <input type="checkbox" class="sheet-pc-stats-show sheet-arrow" title="stats-show" name="attr_stats-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Stats</td>
                    </table>
                    <div class="sheet-pc-stats">
                        <table cellpadding="0" cellspacing="0">
                            <td>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header2">Stat</td>
                                <td class="sheet-table-header2">Temp</td>
                                <td class="sheet-table-header2">Potential</td>
                                <td class="sheet-table-header2">Basic<br>Bonus</td>
                                <td class="sheet-table-header2">Racial<br>Bonus</td>
                                <td class="sheet-table-header2">Special<br>Bonus</td>
                                <td class="sheet-table-header2">Stat<br>Bonus</td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Agility</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_agility" title="agility" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_agpotential" title="agpotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_agbasebonus" title="agbasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_agracial" title="agracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_agspecial" title="agspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_agbonus" title="agbonus" value=" (@{agbasebonus} +@{agracial} +@{agspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_agcheckmacro" title="agcheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Agility}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{agbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{agbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_agcheck" title="agcheck" value="@{agcheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Constitution</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_constitution" title="constitution" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_copotential" title="copotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_cobasebonus" title="cobasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_coracial" title="coracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_cospecial" title="cospecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_cobonus" title="cobonus" value=" (@{cobasebonus} +@{coracial} +@{cospecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_cocheckmacro" title="cocheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Constitution}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{cobonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{cobonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_cocheck" title="cocheck" value="@{cocheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Memory</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_memory" title="memory" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_mepotential" title="mepotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_mebasebonus" title="mebasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_meracial" title="meracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_mespecial" title="mespecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_mebonus" title="mebonus" value=" (@{mebasebonus} +@{meracial} +@{mespecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_mecheckmacro" title="mecheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Memory}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{mebonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{mebonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_mecheck" title="mecheck" value="@{mecheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Reasoning</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_reasoning" title="reasoning" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_repotential" title="repotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_rebasebonus" title="rebasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_reracial" title="reracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_respecial" title="respecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_rebonus" title="rebonus" value=" (@{rebasebonus} +@{reracial} +@{respecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_recheckmacro" title="recheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Reasoning}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{rebonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{rebonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_recheck" title="recheck" value="@{recheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Self Discipline &nbsp; </td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_selfdiscipline" title="selfdiscipline" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_sdpotential" title="sdpotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_sdbasebonus" title="sdbasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_sdracial" title="sdracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_sdspecial" title="sdspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_sdbonus" title="sdbonus" value=" (@{sdbasebonus} +@{sdracial} +@{sdspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_sdcheckmacro" title="sdcheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Self Discipline}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{sdbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{sdbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_sdcheck" title="sdcheck" value="@{sdcheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row" style="height: 1px; font-size: 0.1em;"><td class="sheet-table-data-center-sm" style="height: 1px; font-size: 0.1em;"> -------</td></tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Empathy</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_empathy" title="empathy" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_empotential" title="empotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_embasebonus" title="embasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_emracial" title="emracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_emspecial" title="emspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_embonus" title="embonus" value=" (@{embasebonus} +@{emracial} +@{emspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_emcheckmacro" title="emcheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Empathy}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{embonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{embonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_emcheck" title="emcheck" value="@{emcheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Intuition</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_intuition" title="intuition" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_inpotential" title="inpotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_inbasebonus" title="inbasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_inracial" title="inracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_inspecial" title="inspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_inbonus" title="inbonus" value=" (@{inbasebonus} +@{inracial} +@{inspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_incheckmacro" title="incheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Intuition}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{inbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{inbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_incheck" title="incheck" value="@{incheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Presence</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_presence" title="presence" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_prpotential" title="prpotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_prbasebonus" title="prbasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_prracial" title="prracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_prspecial" title="prspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_prbonus" title="prbonus" value=" (@{prbasebonus} +@{prracial} +@{prspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_prcheckmacro" title="prcheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Presence}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{prbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{prbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_prcheck" title="prcheck" value="@{prcheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Quickness</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_quickness" title="quickness" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_qupotential" title="qupotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_qubasebonus" title="qubasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_quracial" title="quracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_quspecial" title="quspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_qubonus" title="qubonus" value=" (@{qubasebonus} +@{quracial} +@{quspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_qucheckmacro" title="qucheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Quickness}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{qubonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{qubonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_qucheck" title="qucheck" value="@{qucheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row">
                                <td class="sheet-table-header">Strength</td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_strength" title="strength" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_stpotential" title="stpotential" value="50"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_stbasebonus" title="stbasebonus" value="0"></td>
                                
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_stracial" title="stracial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_stspecial" title="stspecial" value="0"></td>
                                <td class="sheet-table-data-center-stats"><input type="text" name="attr_stbonus" title="stbonus" value=" (@{stbasebonus} +@{stracial} +@{stspecial}) " disabled></td>
                                <td class="sheet-table-data-center-stats"><textarea rows="1" style="width: 45px; height: 19px; margin-bottom: 0;" name="attr_stcheckmacro" title="stcheckmacro">/w gm &{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Strength}} {{checkroll=[[1d100!>96cf<5cs=100 +3*[[@{stbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{stbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                                <td>
                                <td><button type="roll" name="attr_stcheck" title="stcheck" value="@{stcheckmacro}"></button></td>
                            </tr>
                            <tr class="sheet-table-row" style="height: 1px; font-size: 0.1em;"><td class="sheet-table-data-center-sm" style="height: 1px; font-size: 0.1em;"> -------</td></tr>
                            </td>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-header">Dev Points: </span>
                                        <span class="sheet-table-data"><input type="text" name="attr_devpoints" title="devpoints" value="0" style="width: 200px;"></span>
                                        <span class="sheet-table-data"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                        <span class="sheet-table-header">Fates: </span>
                                        <span class="sheet-table-data"><input type="text" name="attr_fatepoints" title="fatepoints" style="width: 40px;"></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr />
                    </div>
                    <table>
                        <input type="checkbox" class="sheet-pc-roletraits-show sheet-arrow" title="roletraits-show" name="attr_roletraits-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Role Traits</td>
                    </table>
                    <div class="sheet-pc-roletraits">
                        <table border="0">
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Appearance: </span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_appearance" title="appearance"></span>
                                        <span class="sheet-table-data-center"> Gender: </span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_gender" title="gender"></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Apparent Age:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_appage" title="apage"></span>
                                        <span class="sheet-table-data-center"> Actual Age:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_age" title="age"></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Skin Color:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_skin" title="skin"></span>
                                        <span class="sheet-table-data-center">&nbsp;</span>
                                        <span class="sheet-table-data-center">&nbsp;</span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Eyes:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_eyes" title="eyes"></span>
                                        <span class="sheet-table-data-center"> Hair:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_hair" title="hair"></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Height:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_height" title="height (in inches)"></span>
                                        <span class="sheet-table-data-right">(<input type="text" style="width: 40%" name="attr_heightft" title="heightft" value="floor(@{height}/12)" disabled>ft &nbsp; </span><span class="sheet-table-data-left"><input type="text" style="width: 40%" name="attr_heightin" title="heightin" value="(@{height}-(12*floor(@{height}/12)))" disabled>in)</span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Weight:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_weight" title="weight"></span>
                                        <span class="sheet-table-data-center">&nbsp;</span>
                                        <span class="sheet-table-data-center">&nbsp;</span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Size:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_bodysize" value="(2*@{height}+@{weight})" title="bodysize" disabled></span>
                                        <span class="sheet-table-data-center">&nbsp;</span>
                                        <span class="sheet-table-data-center">&nbsp;</span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Base Movement Rate:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_basemoverate" title="basemoverate" title="basemoverate" value="50+(5*ceil((@{height}/6)-12.5))[stride mod] +3*(@{qubonus})+ (@{weightpenalty})" disabled></span>
                                        <span class="sheet-table-data-center"></span>
                                        <span class="sheet-table-data-center"></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Running Horizontal Jump:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_runhorizjump" title="runhorizjump" value="round((@{height}-70)/2 +50 + 2*(@{stbonus}))" disabled></span>
                                        <span class="sheet-table-data-center">Standing Horizontal Jump:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_standhorizjump" title="standhorizjump" value="round(@{runhorizjump}/2)" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Running Vertical Jump:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_runvertjump" title="runvertjump" value="round((@{height}-70)/3 +12 + (@{stbonus}))" disabled></span>
                                        <span class="sheet-table-data-center">Standing Vertical Jump:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_standvertjump" title="standvertjump" value="round(@{runvertjump}/3)" disabled></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr />
                    </div>
                    <table>
                        <input type="checkbox" class="sheet-pc-racefixedinfo-show sheet-arrow" title="racefixedinfo-show" name="attr_racefixedinfo-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Race/Stat Fixed Info</td>
                    </table>
                    <div class="sheet-pc-racefixedinfo">
                        <table>
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Soul Departure: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 25px;" name="attr_souldepart" title="souldepart" value="1">rnds &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                        
                                        <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Recovery Multiplier: </span>
                                        <span class="sheet-table-data-center">x<input type="text" style="width: 40px;" name="attr_recoverymult" title="recoverymult" value="1"></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr />
                    </div>
                    <table>
                        <input type="checkbox" class="sheet-pc-recoveryrates-show sheet-arrow" title="recoveryrates-show" name="attr_recoveryrates-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Recovery Rates</td>
                    </table>
                    <div class="sheet-pc-recoveryrates">
                        <table>
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Hit Points / hr resting: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 50px;" name="attr_hpphrest" title="hpphrest" value="(((ceil((@{cobonus})/2) + 1) + abs(ceil((@{cobonus})/2) - 1)) / 2)" disabled></span>
                                        <span class="sheet-table-data-center"> &nbsp; &nbsp; Power Points / hr resting: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 50px;" name="attr_ppphrest" title="ppphrest" value="(((ceil((@{realm})/2) + 1) + abs(ceil((@{realm})/2) - 1)) / 2)" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Hit Points / 3 hrs sleep: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 50px;" name="attr_hpp3hsleep" title="hpp3hsleep" value="((((@{cobonus})*2 + 3*@{hpphrest}) + abs((@{cobonus})*2 - 3*@{hpphrest})) / 2)" disabled></span>
                                        <span class="sheet-table-data-center"> &nbsp; &nbsp; Power Points / 3 hrs sleep: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 50px;" name="attr_ppp3hsleep" title="ppp3hsleep" value="(((ceil((@{powerpoints|max})/2) + 3*@{ppphrest}) + abs(ceil((@{powerpoints|max})/2) - 3*@{ppphrest})) / 2)" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Hit Points / 3 hrs active: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 50px;" name="attr_hpp3hactive" title="hpp3hactive" value="1" disabled></span>
                                        <span class="sheet-table-data-center"> &nbsp; &nbsp; Power Points / 3 hrs active: </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width: 50px;" name="attr_ppp3hactive" title="ppp3hactive" value="1" disabled></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="sheet-col">
                    <table>
                        <input type="checkbox" class="sheet-pc-languages-show sheet-arrow" title="languages-show" name="attr_languages-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Languages</td>
                    </table>
                    <div class="sheet-pc-languages">
                        <div class="sheet-table">
                            <div class="sheet-table-data-center" style="vertical-align:top;">
                                <div style="float: left">
                                    <table>
                                        <tr class="sheet-table-header">
                                            <td style="width: 84px;">Language </td>
                                            <td style="width: 53px;">Spoken</td>
                                            <td style="width: 53px;">Written</td>
                                        </tr>
                                    </table>
                                    <fieldset class="repeating_languages">
                                        <table style="width: 195px;" class="sheet-table-row">
                                            <tr>
                                                <td style="width: 84px;"><input type="text" name="attr_languagename" value="Trade"></td>
                                                <td style="width: 53px;"><input type="text" style="width: 23px;" title="Ranks in Spoken" name="attr_languagespoken-rank" value="4"></td>
                                                <td style="width: 53px;"><input type="text" style="width: 23px;" title="Ranks in Written" name="attr_languagewritten-rank" value="4"></td>
                                            </tr>
                                        </table>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="sheet-table-data-center" style="vertical-align:top;">
                            </div>
                            <div class="sheet-table-data-center" style="vertical-align:top;">
                                <div style="float: left; padding-left: 50px;">
                                    <table>
                                        <tr class="sheet-table-header">
                                            <td style="width: 84px;">Language </td>
                                            <td style="width: 53px;">Spoken</td>
                                            <td style="width: 53px;">Written</td>
                                        </tr>
                                    </table>
                                    <fieldset class="repeating_languages2">
                                        <table style="width: 195px;" class="sheet-table-row">
                                            <tr>
                                                <td style="width: 84px;"><input type="text" name="attr_language2name" value="Trade"></td>
                                                <td style="width: 53px;"><input type="text" style="width: 23px;" title="Ranks in Spoken" name="attr_language2spoken-rank" value="4"></td>
                                                <td style="width: 53px;"><input type="text" style="width: 23px;" title="Ranks in Written" name="attr_language2written-rank" value="4"></td>
                                            </tr>
                                        </table>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    
                    <table>
                        <input type="checkbox" class="sheet-pc-notes-show sheet-arrow" title="notes-show" name="attr_notes-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Notes</td>
                    </table>
                    <div class="sheet-pc-notes">
                        <table>
                            <tr>
                                <td><b>Racial Notes</b><br><textarea rows="4" cols="55" style="width: 380px;" name="attr_racialnotes" title="racialnotes"></textarea></td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr>
                                <td><b>Cultural Notes</b><br><textarea rows="4" cols="55" style="width: 380px;" name="attr_culturenotes" title="culturenotes"></textarea></td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr>
                                <td><b>Character Notes</b><br><textarea rows="8" cols="55" style="width: 380px;" name="attr_characternotes" title="characternotes"></textarea></td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr>
                                <td><b>Other</b><br><textarea rows="10" cols="55" style="width: 380px;" name="attr_othernotes" title="othernotes"></textarea></td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </label>

    <div style="clear:both"></div>
    <br>
</div>

<div class="sheet-tab-content sheet-tab2">
    <h1> </h1>
    
    <input type="checkbox" class="sheet-pc-notes1-show sheet-arrow" title="notes1-show" name="attr_notes1-show" value="1" checked /><span style="text-align: left;">Show? <input type="text" style="width: 395px;" name="attr_notes1groupname" title="notes1groupname" value="Notes Section Title (change it to what you want)"></span>
    <div class="sheet-pc-notes1">
        <table>
            <tr>
                <td style="vertical-align:top;">
                    <fieldset class="repeating_notes1">
                        <table style="width: 800px;" class="sheet-table-row">
                            <div class="sheet-table-row">
                                <span class="sheet-table-col"><input style="width: 80px;" type="text" name="attr_note1date" title="note1date" value="Date"> &nbsp; </span>
                                <span class="sheet-table-col">
                                    <textarea input class="sheet-inputbox" rows="1" cols="55" style="height: 19px; width: 710px;" name="attr_note1body" title="note1body">Note etc</textarea>
                                </span>
                            </div>
                        </table>
                    </fieldset>
                </td>
            </tr>
        </table>
    </div>
    <hr />
    <input type="checkbox" class="sheet-pc-notes2-show sheet-arrow" title="notes2-show" name="attr_notes2-show" value="1" checked /><span style="text-align: left;">Show? <input type="text" style="width: 395px;" name="attr_notes2groupname" title="notes2groupname" value="Notes Section Title (change it to what you want)"></span>
    <div class="sheet-pc-notes2">
        <table>
            <tr>
                <td style="vertical-align:top;">
                    <fieldset class="repeating_notes2">
                        <table style="width: 800px;" class="sheet-table-row">
                            <div class="sheet-table-row">
                                <span class="sheet-table-col"><input style="width: 80px;" type="text" name="attr_note2date" title="note2date" value="Date"> &nbsp; </span>
                                <span class="sheet-table-col">
                                    <textarea input class="sheet-inputbox" rows="1" cols="55" style="height: 19px; width: 710px;" name="attr_note2body" title="note2body">Note etc</textarea>
                                </span>
                            </div>
                        </table>
                    </fieldset>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="sheet-tab-content sheet-tab3">
    
    <h1> </h1>
</div>

<div class="sheet-tab-content sheet-tab4">
    <h1> </h1>
    
    <div style="float: left">
        <br>
        <table stye="border:0">
            <tbody>
                <tr> <td>Name:</td><td colspan="3"><input type="text" name="attr_character_name"></td></tr>
                <tr>
                    <td>Type:</td>
                    <td><input type="text" name="attr_type" title="type"></td>
                    <td>Class:</td>
                    <td><input type="text" name="attr_class" title="class"></td>
                </tr>
                <tr>
                    <td>Level:</td>
                    <td><input type="text" name="attr_level" title="level" value="0"></td>
                    <td>Level Code:</td>
                    <td><input type="text" name="attr_levelcode" title="levelcode" style="width: 48%;"></td>
                </tr>
            </tbody>
        </table>
        <hr />
        <label class="sheet-label">
            <input name="attr_expand" type="radio" value="6" class="sheet-expand" checked="true" />
            <div class="sheet-tab">Movement/Combat</div>
            <label class="sheet-label">
                <input name="attr_expand" type="radio" value="7" class="sheet-expand" />
                <div class="sheet-tab">Encounter Stats</div>
                <label class="sheet-label">
                    <input name="attr_expand" type="radio" value="8" class="sheet-expand" />
                    <div class="sheet-tab">General Description</div>
                    <label class="sheet-label">
                        <input name="attr_expand" type="radio" value="9" class="sheet-expand" />
                        <div class="sheet-tab">Other</div>
                        <div class="sheet-character-sheet sheet-show">
                            
                            <div style="float: left">
                                <table>
                                    <input type="checkbox" class="sheet-pc-equip-show sheet-arrow" title="equip-show" name="attr_equip-show" value="1" checked />
                                    <span></span>
                                    <td class="sheet-statlabel-big" style="width: 900px;">Other Information</td>
                                </table>
                                <div class="sheet-pc-equip">
                                    <table>
                                        <tr>
                                            <td><textarea rows="30" cols="55" style="width: 800px;" name="attr_npcothernotes" title="npcothernotes"></textarea></td>
                                        </tr>
                                        <tr><td>&nbsp;</td></tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </label>
                    <div class="sheet-character-sheet sheet-show">
                        
                        <div style="float: left">
                            <table>
                                <input type="checkbox" class="sheet-pc-notes-show sheet-arrow" title="notes-show" name="attr_notes-show" value="1" checked />
                                <span></span>
                                <td class="sheet-statlabel-big" style="width: 900px;">General Description</td>
                            </table>
                            <div class="sheet-pc-notes">
                                <table>
                                    <tr>
                                        <td><b>Description</b><br><textarea rows="4" cols="55" style="width: 800px;" name="attr_npcdescription" title="npcdescription"></textarea></td>
                                    </tr>
                                    <tr><td>&nbsp;</td></tr>
                                    <tr>
                                        <td><b>Lifestyle</b><br><textarea rows="4" cols="55" style="width: 800px;" name="attr_npclifestyle" title="npclifestyle"></textarea></td>
                                    </tr>
                                    <tr><td>&nbsp;</td></tr>
                                    <tr>
                                        <td><b>Combat</b><br><textarea rows="4" cols="55" style="width: 800px;" name="attr_npccombatnotes" title="npccombatnotes"></textarea></td>
                                    </tr>
                                    <tr><td>&nbsp;</td></tr>
                                    <tr>
                                        <td><b>Background</b><br><textarea rows="4" cols="55" style="width: 800px;" name="attr_npcbackgroundnotes" title="npcbackgroundnotes"></textarea></td>
                                    </tr>
                                    <tr><td>&nbsp;</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </label>
                <div class="sheet-character-sheet sheet-show">
                    
                    <table>
                        <input type="checkbox" class="sheet-pc-roletraits-show sheet-arrow" title="roletraits-show" name="attr_roletraits-show" value="1" checked />
                        <span></span>
                        <td class="sheet-statlabel-big" style="width: 900px;">Encounter Stats</td>
                    </table>
                    <div class="sheet-pc-roletraits">
                        <table border="0">
                            <tr>
                                <td>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center"># Encountered:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_npcnumenc" title="npcnumenc"></span>
                                        <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; </span>
                                        <span class="sheet-table-data-center">Size:</span>
                                        <span class="sheet-table-data-center"><input type="text" name="attr_npcheight" title="npcheight"></span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Treasure:</span>
                                        <span class="sheet-table-data-center">
                                            <select class="sheet-inputbox" style="height: 24px; width: 95px; font-size: 0.75em; margin-bottom: 0;" name="attr_treasurecode" title="treasurecode">
                                                <option type="text" value="None" selected>--</option>
                                                <option type="text" value="Special; see description">*</option>
                                                <option type="text" value="Items= Very Poor; Wealth = Very Poor;">a</option>
                                                <option type="text" value="Items= Very Poor; Wealth = Poor;">b</option>
                                                <option type="text" value="Items= Very Poor; Wealth = Normal;">c</option>
                                                <option type="text" value="Items= Very Poor; Wealth = Rich;">d</option>
                                                <option type="text" value="Items= Very Poor; Wealth = Very Rich;">e</option>
                                                <option type="text" value="Items= Poor; Wealth = Very Poor;">f</option>
                                                <option type="text" value="Items= Poor; Wealth = Poor;">g</option>
                                                <option type="text" value="Items= Poor; Wealth = Normal;">h</option>
                                                <option type="text" value="Items= Poor; Wealth = Rich;">i</option>
                                                <option type="text" value="Items= Poor; Wealth = Very Rich;">j</option>
                                                <option type="text" value="Items= Normal; Wealth = Very Poor;">k</option>
                                                <option type="text" value="Items= Normal; Wealth = Poor;">l</option>
                                                <option type="text" value="Items= Normal; Wealth = Normal;">m</option>
                                                <option type="text" value="Items= Normal; Wealth = Rich;">n</option>
                                                <option type="text" value="Items= Normal; Wealth = Very Rich;">o</option>
                                                <option type="text" value="Items= Rich; Wealth = Very Poor;">p</option>
                                                <option type="text" value="Items= Rich; Wealth = Poor;">q</option>
                                                <option type="text" value="Items= Rich; Wealth = Normal;">r</option>
                                                <option type="text" value="Items= Rich; Wealth = Rich;">s</option>
                                                <option type="text" value="Items= Rich; Wealth = Very Rich;">t</option>
                                                <option type="text" value="Items= Very Rich; Wealth = Very Poor;">u</option>
                                                <option type="text" value="Items= Very Rich; Wealth = Poor;">v</option>
                                                <option type="text" value="Items= Very Rich; Wealth = Normal;">w</option>
                                                <option type="text" value="Items= Very Rich; Wealth = Rich;">x</option>
                                                <option type="text" value="Items= Very Rich; Wealth = Very Rich;">y</option>
                                                <option type="text" value="Items= Special; Wealth = Special;">z</option>
                                            </select>
                                        </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:625px;" name="attr_treasuretype" name="treasuretype" value="@{treasurecode}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Bonus XP:</span>
                                        <span class="sheet-table-data-center">
                                            <select class="sheet-inputbox" style="height: 24px; width: 95px; font-size: 0.75em; margin-bottom: 0;" name="attr_bonusxpcode" title="bonusxpcode">
                                                <option type="text" value="  --(1-2)/   --(3)/   --(5)/   --(7)/   --(9)/   --(11)/   --(13)/   --(15)/   --(17)/   --(19)/   --(21+)" selected>--</option>
                                                <option type="text" value="  50(1-2)/   40(3)/   30(5)/   20(7)/   10(9)/   --(11)/   --(13)/   --(15)/   --(17)/   --(19)/   --(21+)">A</option>
                                                <option type="text" value="  75(1-2)/   60(3)/   50(5)/   40(7)/   30(9)/   20(11)/   10(13)/   --(15)/   --(17)/   --(19)/   --(21+)">B</option>
                                                <option type="text" value=" 100(1-2)/   95(3)/   90(5)/   85(7)/   80(9)/   75(11)/   70(13)/   65(15)/   60(17)/   55(19)/   50(21+)">C</option>
                                                <option type="text" value=" 200(1-2)/  190(3)/  180(5)/  170(7)/  160(9)/  150(11)/  140(13)/  130(15)/  120(17)/  110(19)/  100(21+)">D</option>
                                                <option type="text" value=" 400(1-2)/  380(3)/  360(5)/  340(7)/  320(9)/  300(11)/  280(13)/  260(15)/  240(17)/  220(19)/  210(21+)">E</option>
                                                <option type="text" value=" 800(1-2)/  760(3)/  720(5)/  680(7)/  640(9)/  600(11)/  560(13)/  520(15)/  480(17)/  440(19)/  400(21+)">F</option>
                                                <option type="text" value="1200(1-2)/ 1140(3)/ 1080(5)/ 1020(7)/  960(9)/  900(11)/  840(13)/  780(15)/  720(17)/  660(19)/  600(21+)">G</option>
                                                <option type="text" value="1600(1-2)/ 1520(3)/ 1440(5)/ 1360(7)/ 1280(9)/ 1200(11)/ 1120(13)/ 1040(15)/  960(17)/  880(19)/  800(21+)">H</option>
                                                <option type="text" value="2000(1-2)/ 1900(3)/ 1800(5)/ 1700(7)/ 1600(9)/ 1500(11)/ 1400(13)/ 1300(15)/ 1200(17)/ 1100(19)/ 1000(21+)">I</option>
                                                <option type="text" value="3000(1-2)/ 2850(3)/ 2700(5)/ 2550(7)/ 2400(9)/ 2250(11)/ 2100(13)/ 1950(15)/ 1800(17)/ 1650(19)/ 1500(21+)">J</option>
                                                <option type="text" value="4000(1-2)/ 3800(3)/ 3600(5)/ 3400(7)/ 3200(9)/ 3000(11)/ 2800(13)/ 2600(15)/ 2400(17)/ 2200(19)/ 2000(21+)">K</option>
                                                <option type="text" value="5000(1-2)/ 4750(3)/ 4500(5)/ 4250(7)/ 4000(9)/ 3750(11)/ 3500(13)/ 3250(15)/ 3000(17)/ 2750(19)/ 2500(21+)">L</option>
                                            </select>
                                        </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:625px;" name="attr_bonusxp" title="bonusxp" value="@{bonusxpcode}" disabled></span>
                                    </div>
                                    
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">Outlook:</span>
                                        <span class="sheet-table-data-center">
                                            <select class="sheet-inputbox" style="height: 24px; width: 95px; font-size: 0.75em; margin-bottom: 0;" name="attr_outlookcode" title="outlookcode">
                                                <option type="text" value="Aggressive and will attack if provoked or hungry." selected>Aggres.</option>
                                                <option type="text" value="Ignores other creatures unless interfered with or attacked.">Aloof</option>
                                                <option type="text" value="Altruistic, has an unselfish regard for the interests of others, often to the extent of risking own safety.">Altru.</option>
                                                <option type="text" value="Belligerent, often attacks without provocation.">Bellig.</option>
                                                <option type="text" value="Attacks closest living creature until it is destroyed.">Berserk</option>
                                                <option type="text" value="Does not believe danger or misfortune exists for it.">Carefree</option>
                                                <option type="text" value="Not only hostile, but delights in death, pain, and suffering.">Cruel</option>
                                                <option type="text" value="Desires power, attempts to control or dominate other creatures.">Domin.</option>
                                                <option type="text" value="Opposed to those who are evil(cruel, hostile, belligerent, etc); supportive of those who are also good.">Good</option>
                                                <option type="text" value="Will attack or attempt to steal from other creatures if risk does not seem too high.">Greedy</option>
                                                <option type="text" value="Normally attacks other creatures on sight.">Hostile</option>
                                                <option type="text" value="If hungry, will attack anything edible; otherwise normal.">Hungry</option>
                                                <option type="text" value="Inquisitive and curious; will approach and examine unusual situations.">Inquis.</option>
                                                <option type="text" value="Normally bolts at any sign of other creatures.">Jumpy</option>
                                                <option type="text" value="Watches and is wary of other creatures; will sometimes attack if hungry.">Normal</option>
                                                <option type="text" value="Ignores the presence of other creatures unless threatened.">Passive</option>
                                                <option type="text" value="Mischievous but playful; will attempt to play with or play pranks on other creatures.">Playful</option>
                                                <option type="text" value="Protective of a thing, place, other creature, etc.">Protect</option>
                                                <option type="text" value="Skittish around other creatures, runs at the slightest hint of danger.">Timid</option>
                                                <option type="text" value="Varies by individual.">Varies</option>
                                            </select>
                                        </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:625px;" name="attr_outlook" title="outlook" value="@{outlookcode}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-center">IQ:</span>
                                        <span class="sheet-table-data-center">
                                            <select class="sheet-inputbox" style="height: 24px; width: 95px; font-size: 0.75em; margin-bottom: 0;" name="attr_iqcode" title="iqcode">
                                                <option type="text" value="None; Animal Instincts" selected>NO</option>
                                                <option type="text" value="Very Low; Re/Me=1-5">VL</option>
                                                <option type="text" value="Low; Re/Me=3-12">LO</option>
                                                <option type="text" value="Little; Re/Me=7-25">LI</option>
                                                <option type="text" value="Inferior; Re/Me=13-40">IN</option>
                                                <option type="text" value="Mediocre; Re/Me=23-50">MD</option>
                                                <option type="text" value="Average; Re/Me=35-65">AV</option>
                                                <option type="text" value="Above Average; Re/Me=50-77">AA</option>
                                                <option type="text" value="Superior; Re/Me=60-86">SU</option>
                                                <option type="text" value="High; Re/Me=80-98">HI</option>
                                                <option type="text" value="Very High; Re/Me=94-99">VH</option>
                                                <option type="text" value="Exceptional; Re/Me=100-102">EX</option>
                                            </select>
                                        </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:625px;" name="attr_iq" title="iq" value="@{iqcode}" disabled></span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-header">Habitat Codes:</span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat1code" title="habitat1code" value="No preferred habitat" style="width: 10px;"><span class="sheet-table-header2-left">---</span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat1" title="habitat1" value="@{habitat1code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat2code" title="habitat2code" value="None appropriate" style="width: 10px;"><span class="sheet-table-header2-left"> ø </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat2" title="habitat2" value="@{habitat2code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat5code" title="habitat5code" value="Climate=hot/dry;  Temp=hot;  Humidity/Precipitation=dry, arid" style="width: 10px;"><span class="sheet-table-header2-left"> a </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat5" title="habitat5" value="@{habitat5code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat11code" title="habitat11code" value="Climate=cool/dry;  Temp=cool;  Humidity/Precipitation=dry, arid" style="width: 10px;"><span class="sheet-table-header2-left"> c </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat11" title="habitat11" value="@{habitat11code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat12code" title="habitat12code" value="Climate=frigid;  Temp=cool;  Humidity/Precipitation=arid" style="width: 10px;"><span class="sheet-table-header2-left"> f </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat12" title="habitat12" value="@{habitat12code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat3code" title="habitat3code" value="Climate=hot/humid;  Temp=hot;  Humidity/Precipitation=rainy, humid" style="width: 10px;"><span class="sheet-table-header2-left"> h </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat3" title="habitat3" value="@{habitat3code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat9code" title="habitat9code" value="Climate=cool/average;  Temp=cool;  Humidity/Precipitation=temperate" style="width: 10px;"><span class="sheet-table-header2-left"> k </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat9" title="habitat9" value="@{habitat9code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat7code" title="habitat7code" value="Climate=warm/average;  Temp=warm, temperate;  Humidity/Precipitation=temperate" style="width: 10px;"><span class="sheet-table-header2-left"> m </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat7" title="habitat7" value="@{habitat7code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat4code" title="habitat4code" value="Climate=hot/average;  Temp=hot;  Humidity/Precipitation=temperate" style="width: 10px;"><span class="sheet-table-header2-left"> n </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat4" title="habitat4" value="@{habitat4code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat8code" title="habitat8code" value="Climate=warm/dry;  Temp=warm, temperate;  Humidity/Precipitation=dry, arid" style="width: 10px;"><span class="sheet-table-header2-left"> s </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat8" title="habitat8" value="@{habitat8code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat10code" title="habitat10code" value="Climate=cool/dry;  Temp=cool;  Humidity/Precipitation=dry, arid" style="width: 10px;"><span class="sheet-table-header2-left"> t </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat10" title="habitat10" value="@{habitat10code}" disabled></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        &nbsp;<input type="checkbox" name="attr_habitat6code" title="habitat6code" value="Climate=warm/humid;  Temp=warm, temperate;  Humidity/Precipitation=rainy, humid" style="width: 10px;"><span class="sheet-table-header2-left"> w </span>
                                        <span class="sheet-table-data-center"><input type="text" style="width:700px;" name="attr_habitat6" title="habitat6" value="@{habitat6code}" disabled></span>
                                    </div>
                                    <br><br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data-left"><b>Environment Codes:</b></span>
                                    </div>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data">Special Features: </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures1code" title="spfeatures1code" value="No preferred special features" style="width: 10px;"><span class="sheet-table-header2-left">---; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures2code" title="spfeatures2code" value="None appropriate" style="width: 10px;"><span class="sheet-table-header2-left"> ø ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures3code" title="spfeatures3code" value="Enchanted or magical places" style="width: 10px;"><span class="sheet-table-header2-left"> E ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures4code" title="spfeatures4code" value="Cross-over points between dimensions" style="width: 10px;"><span class="sheet-table-header2-left"> K ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures5code" title="spfeatures5code" value="Near villages, towns, cities, or castles" style="width: 10px;"><span class="sheet-table-header2-left"> N ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures6code" title="spfeatures6code" value="Volcanic areas" style="width: 10px;"><span class="sheet-table-header2-left"> V ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures7code" title="spfeatures7code" value="Cavern complexes" style="width: 10px;"><span class="sheet-table-header2-left"> X ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures8code" title="spfeatures8code" value="Battlefields or shipwrecks" style="width: 10px;"><span class="sheet-table-header2-left"> Y ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures9code" title="spfeatures9code" value="Rural inhabited or cultivated areas" style="width: 10px;"><span class="sheet-table-header2-left"> † ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures10code" title="spfeatures10code" value="Cave entrances, overhangs, or lairs" style="width: 10px;"><span class="sheet-table-header2-left"> @ ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures11code" title="spfeatures11code" value="Burial areas" style="width: 10px;"><span class="sheet-table-header2-left"> § ; </span>
                                        &nbsp;<input type="checkbox" name="attr_spfeatures12code" title="spfeatures12code" value="Ruins" style="width: 10px;"><span class="sheet-table-header2-left"> # ; </span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_spfeatures13" title="spfeatures13" value="@{spfeatures1code}; @{spfeatures2code}; @{spfeatures3code}; @{spfeatures4code}" disabled></span>
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_spfeatures14" title="spfeatures14" value="@{spfeatures5code}; @{spfeatures6code}; @{spfeatures7code}; @{spfeatures8code}" disabled></span>
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_spfeatures15" title="spfeatures15" value="@{spfeatures9code}; @{spfeatures10code}; @{spfeatures11code}; @{spfeatures12code}" disabled></span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data">Water Sources: </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources1code" title="watersources1code" value="No preferred water sources" style="width: 10px;"><span class="sheet-table-header2-left">---; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources2code" title="watersources2code" value="None appropriate" style="width: 10px;"><span class="sheet-table-header2-left"> ø ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources3code" title="watersources3code" value="Breaks or wadis" style="width: 10px;"><span class="sheet-table-header2-left"> B ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources4code" title="watersources4code" value="Freshwater coasts and banks" style="width: 10px;"><span class="sheet-table-header2-left"> F ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources5code" title="watersources5code" value="Glaciers or snowfields" style="width: 10px;"><span class="sheet-table-header2-left"> G ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources6code" title="watersources6code" value="Tropical islets, reefs, and/or atolls" style="width: 10px;"><span class="sheet-table-header2-left"> I ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources7code" title="watersources7code" value="Lakes or rivers" style="width: 10px;"><span class="sheet-table-header2-left"> L ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources8code" title="watersources8code" value="Marshes or swamps" style="width: 10px;"><span class="sheet-table-header2-left"> M ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources9code" title="watersources9code" value="Oceans" style="width: 10px;"><span class="sheet-table-header2-left"> O ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources10code" title="watersources10code" value="Oasis or isolated water sources" style="width: 10px;"><span class="sheet-table-header2-left"> Q ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources11code" title="watersources11code" value="Saltwater shores or shallows" style="width: 10px;"><span class="sheet-table-header2-left"> S ; </span>
                                        &nbsp;<input type="checkbox" name="attr_watersources12code" title="watersources12code" value="Deserts" style="width: 10px;"><span class="sheet-table-header2-left"> Z ; </span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_watersources13" title="watersources13" value="@{watersources1code}; @{watersources2code}; @{watersources3code}; @{watersources4code}; @{watersources5code}; @{watersources6code}" disabled></span>
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_watersources14" title="watersources14" value="@{watersources7code}; @{watersources8code}; @{watersources9code}; @{watersources10code}; @{watersources11code}; @{watersources12code}" disabled></span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data">Terrain: </span>
                                        &nbsp;<input type="checkbox" name="attr_terrain1code" title="terrain1code" value="No preferred terrain" style="width: 10px;"><span class="sheet-table-header2-left">---; </span>
                                        &nbsp;<input type="checkbox" name="attr_terrain2code" title="terrain2code" value="None appropriate" style="width: 10px;"><span class="sheet-table-header2-left"> ø ; </span>
                                        &nbsp;<input type="checkbox" name="attr_terrain3code" title="terrain3code" value="Alpine, high altitude, and/or mountainous" style="width: 10px;"><span class="sheet-table-header2-left"> A ; </span>
                                        &nbsp;<input type="checkbox" name="attr_terrain4code" title="terrain4code" value="Rough, rugged, and/or rocky hills" style="width: 10px;"><span class="sheet-table-header2-left"> R ; </span>
                                        &nbsp;<input type="checkbox" name="attr_terrain5code" title="terrain5code" value="Underground" style="width: 10px;"><span class="sheet-table-header2-left"> U ; </span>
                                        &nbsp;<input type="checkbox" name="attr_terrain6code" title="terrain6code" value="Waste and/or barren" style="width: 10px;"><span class="sheet-table-header2-left"> W ; </span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_terrain13" title="terrain13" value="@{terrain1code}; @{terrain2code}; @{terrain3code}; @{terrain4code}; @{terrain5code}; @{terrain6code}" disabled></span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data">Vegetation: </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation1code" title="vegetation1code" value="No preferred vegetation" style="width: 10px;"><span class="sheet-table-header2-left">---; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation2code" title="vegetation2code" value="None appropriate" style="width: 10px;"><span class="sheet-table-header2-left"> ø ; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation3code" title="vegetation3code" value="Coniferous forest and/or taiga" style="width: 10px;"><span class="sheet-table-header2-left"> C ; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation4code" title="vegetation4code" value="Deciduous/coniferous (mixed) forest" style="width: 10px;"><span class="sheet-table-header2-left"> D ; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation5code" title="vegetation5code" value="Heath, scrub, and/or moor" style="width: 10px;"><span class="sheet-table-header2-left"> H ; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation6code" title="vegetation6code" value="Jungle and/or rain forest" style="width: 10px;"><span class="sheet-table-header2-left"> J ; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation7code" title="vegetation7code" value="Plains and/or grassland" style="width: 10px;"><span class="sheet-table-header2-left"> P ; </span>
                                        &nbsp;<input type="checkbox" name="attr_vegetation8code" title="vegetation8code" value="Tundra" style="width: 10px;"><span class="sheet-table-header2-left"> T ; </span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_vegetation13" title="vegetation13" value="@{vegetation1code}; @{vegetation2code}; @{vegetation3code}; @{vegetation4code}; @{vegetation5code}; @{vegetation6code}" disabled></span>
                                        <span class="sheet-table-data"><input type="text" rows="4" cols="55" style="width:800px;" name="attr_vegetation14" title="vegetation14" value="@{vegetation7code}; @{vegetation8code}" disabled></span>
                                    </div>
                                    <br>
                                    <div class="sheet-table-row">
                                        <span class="sheet-table-data">Frequency: </span>
                                        <span class="sheet-table-data-center">
                                            <select class="sheet-inputbox" style="height: 24px; width: 135px; font-size: 0.75em; margin-bottom: 0;" name="attr_frequencycode" title="frequencycode">
                                                <option type="text" value="Hunting modifier=+30;  Frequency Occurring=100%" selected>1 - Routine</option>
                                                <option type="text" value="Hunting modifier=+20;  Frequency Occurring=90%">2 - Easy</option>
                                                <option type="text" value="Hunting modifier=+10;  Frequency Occurring=75%">3 - Light</option>
                                                <option type="text" value="Hunting modifier=+0;   Frequency Occurring=50%">4 - Medium</option>
                                                <option type="text" value="Hunting modifier=-10;  Frequency Occurring=40%">5 - Hard</option>
                                                <option type="text" value="Hunting modifier=-20;  Frequency Occurring=30%">6 - Very Hard</option>
                                                <option type="text" value="Hunting modifier=-30;  Frequency Occurring=20%">7 - Extremely Hard</option>
                                                <option type="text" value="Hunting modifier=-50;  Frequency Occurring=9%">8 - Sheer Folly</option>
                                                <option type="text" value="Hunting modifier=-70;  Frequency Occurring=4%">9 - Absurd</option>
                                            </select>
                                        </span>
                                        <span class="sheet-table-data"><input type="text" style="width:600px;" name="attr_frequency" title="frequency" value="@{frequencycode}" disabled></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr />
                    </div>
                </div>
            </label>
            <div class="sheet-character-sheet sheet-show">
                
                <table>
                    <input type="checkbox" class="sheet-pc-armor-show sheet-arrow" title="armor-show" name="attr_armor-show" value="1" checked />
                    <span></span>
                    <td class="sheet-statlabel-big" style="width: 900px;">Movement Stats</td>
                </table>
                <div class="sheet-pc-armor">
                    <table border="0">
                        <tr>
                            <td>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Size: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcsize" title="npcsize" value="0"> </span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Base Movement Rate: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcbmmr" title="npcbmmr" value="0"> </span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Max Pace: &nbsp;</span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 155px; vertical-align:top; margin-bottom: 0;" name="attr_npcmaxpace" title="npcmaxpace">
                                            <option value="1" selected>Walk</option>
                                            <option value="1.5">Jog (Fast Walk / Jog)</option>
                                            <option value="2">Run</option>
                                            <option value="3">Spt (Sprint / Fast Run)</option>
                                            <option value="4">FSpt (Fast Sprint)</option>
                                            <option value="5">Dash (Moderately Fast)</option>
                                            <option value="0 [varies]">Var (Varies due to armor)</option>
                                        </select>
                                    </span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pace Mult: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcpacemult" title="npcpacemult" value="@{npcmaxpace}" disabled> </span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MM Bonus: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcmmbonus" title="npcmmbonus" value="0"> </span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MS (Movement Speed): &nbsp;</span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 155px; vertical-align:top; margin-bottom: 0;" name="attr_npcms" title="npcms">
                                            <option value="-25">IN (Inching)</option>
                                            <option value="-20">CR (Creeping)</option>
                                            <option value="-10">VS (Very Slow)</option>
                                            <option value="0" selected>SL (Slow)</option>
                                            <option value="10">MD (Medium)</option>
                                            <option value="20">MF (Moderately Fast)</option>
                                            <option value="30">FA (Fast)</option>
                                            <option value="40">VF (Very Fast)</option>
                                            <option value="50">BF (Blindingly Fast)</option>
                                        </select>
                                    </span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Base DB: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcbasedb" title="npcbasedb" value="@{npcms}" disabled> </span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Flee/Evade: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcfleeevade" title="npcfleeevade" value="(((@{npcms}+abs(@{npcms}))/2)/2)" disabled> </span>
                                </div>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AQ (Attack Quickness): &nbsp;</span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 155px; vertical-align:top; margin-bottom: 0;" name="attr_npcaq" title="npcaq">
                                            <option value="-16">IN (Inching)</option>
                                            <option value="-12">CR (Creeping)</option>
                                            <option value="-8">VS (Very Slow)</option>
                                            <option value="-4">SL (Slow)</option>
                                            <option value="0" selected>MD (Medium)</option>
                                            <option value="4">MF (Moderately Fast)</option>
                                            <option value="8">FA (Fast)</option>
                                            <option value="12">VF (Very Fast)</option>
                                            <option value="16">BF (Blindingly Fast)</option>
                                        </select>
                                    </span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Init Mod: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcinitmod" title="npcinitmod" value="@{npcaq}" disabled> <button type="roll" name="attr_npcinitiative" title="npcinitiative" value="/w gm &{template:RMSSInitiative} {{name=@{selected|token_name}'s }} {{check=initiative roll: }}{{checkroll=[[2d10 + @{npcinitmod}[Aq] &{tracker} ]] }} "></button></span>
                                    <span class="sheet-table-data-center"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Charge/Lunge: &nbsp;</span>
                                    <span class="sheet-table-data-center"><input type="text" style="width: 60px;" name="attr_npcchargelunge" title="npcchargelunge" value="ceil(((@{npcaq}+1+abs(@{npcaq}+1))/2)/4)*(-5)" disabled> </span>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <hr />
                </div>
                <table>
                    <input type="checkbox" class="sheet-pc-stats-show sheet-arrow" title="stats-show" name="attr_stats-show" value="1" checked />
                    <span></span>
                    <td class="sheet-statlabel-big" style="width: 900px;">Combat Stats</td>
                </table>
                <div class="sheet-pc-stats">
                    <table>
                        <tr>
                            <td>
                                <br>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data">Hit Points:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npchitpoints" title="npchitpoints" value="0" style="width: 40px; text-align:right;"></span>
                                    <span class="sheet-table-data">/</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npchitpoints_max" title="npchitpoints|max" value="1" style="width: 40px;"></span>
                                    <span class="sheet-table-data"> &nbsp; &nbsp;</span>
                                    <span class="sheet-table-data"> &nbsp; 75%:<input type="text" name="attr_npchitpoints-75" title="npchitpoints-75" value="floor((@{npchitpoints|max})*.75)" style="width: 30px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; 50%:<input type="text" name="attr_npchitpoints-50" title="npchitpoints-50" value="floor((@{npchitpoints|max})*.5)" style="width: 30px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; 25%:<input type="text" name="attr_npchitpoints-25" title="npchitpoints-25" value="floor((@{npchitpoints|max})*.25)" style="width: 30px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; &nbsp; </span>
                                    <span class="sheet-table-data"> &nbsp; Base Hits Code:</span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 50px; vertical-align:top; margin-bottom: 0;" name="attr_npchitscode" title="npchitscode">
                                            <option value="0.01" selected>---</option>
                                            <option value="0.02">A</option>
                                            <option value="0.03">B</option>
                                            <option value="0.04">C</option>
                                            <option value="0.05">D</option>
                                            <option value="50">E</option>
                                            <option value="100">F</option>
                                            <option value="150">G</option>
                                            <option value="200">H</option>
                                        </select>
                                    </span>
                                    <span class="sheet-table-data"> &nbsp; </span>
                                    <span class="sheet-table-data"> &nbsp; Crits:</span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 55px; vertical-align:top; margin-bottom: 0;" name="attr_npccritscode1" title="npccritscode1">
                                            <option value="Normal crits." selected>---</option>
                                            <option value="Decrease crit severity by 1 (A mod by -20; B becomes A, etc.).">I</option>
                                            <option value="Decrease crit severity by 2 (A mod by -50; B by -20; C becomes A, etc).">II</option>
                                            <option value="Use Large Creature Critical Strike Table.">LA</option>
                                            <option value="Use Super Large Creature Critical Strike Table.">SL</option>
                                        </select>
                                    </span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 55px; vertical-align:top; margin-bottom: 0;" name="attr_npccritscode2" title="npccritscode2">
                                            <option value="---" selected>---</option>
                                            <option value="Stun results do not affect creature.">@</option>
                                            <option value="Stun results and bleeders do not affect creature.">#</option>
                                        </select>
                                    </span>
                                </div>
                                <div>
                                    <span class="sheet-table-data"><input type="text" style="width: 450px;" name="attr_npccrits" title="npccrits" value="@{npccritscode1}" disabled> </span>
                                    <span class="sheet-table-data"><input type="text" style="width: 310px;" name="attr_npccrits2" title="npccrits2" value="@{npccritscode2}" disabled> </span>
                                </div>
                                <br>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data">Power Points:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npcpowerpoints" title="npcpowerpoints" style="width: 40px; text-align:right;"></span>
                                    <span class="sheet-table-data">/</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npcpowerpoints_max" title="npcpowerpoints|max" value="0" style="width: 40px;"></span>
                                    <span class="sheet-table-data"> &nbsp; </span>
                                    <span class="sheet-table-data"> &nbsp; 75%:<input type="text" name="attr_powerpoints-75" title="npcpowerpoints-75" value="floor((@{npcpowerpoints|max})*.75)" style="width: 30px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; 50%:<input type="text" name="attr_powerpoints-50" title="npcpowerpoints-50" value="floor((@{npcpowerpoints|max})*.5)" style="width: 30px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; 25%:<input type="text" name="attr_powerpoints-25" title="npcpowerpoints-25" value="floor((@{npcpowerpoints|max})*.25)" style="width: 30px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; &nbsp; </span>
                                    <span class="sheet-table-data"> &nbsp; PP Mult:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_ppmult" title="ppmult" value="1" style="width: 40px;"></span>
                                    <span class="sheet-table-data"> &nbsp; </span>
                                    <span class="sheet-table-data"> &nbsp; Adder:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_ppadder" title="ppadder" value="0" style="width: 40px;"></span>
                                </div>
                                <br>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-header">Exhaustion Points: </span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npcexhaustionpoints" title="npcexhaustionpoints" style="width: 45px;" value="1"></span>
                                    <span class="sheet-table-data">/</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npcexhaustionpoints_max" title="npcexhaustionpoints|max" value="40+(3*@{stambonus})+@{npcexhaustmiscbonus}" style="width: 45px;" disabled></span>
                                    <span class="sheet-table-data"> &nbsp; Stamina Bonus:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_stambonus" title="stambonus" style="width: 30px;" value="0"></span>
                                    <span class="sheet-table-data"> &nbsp; Bonus Exhaust. Points:</span>
                                    <span class="sheet-table-data"><input type="text" name="attr_npcexhaustmiscbonus" title="npcexhaustmiscbonus" style="width: 30px;" value="floor(@{npchitscode})" disabled></span>
                                </div>
                                <br>
                                <div class="sheet-table-row">
                                    <span class="sheet-table-data">AT:</span>
                                    <span class="sheet-table-data-center">
                                        <select style="width: 270px; vertical-align:top; margin-bottom: 0;" name="attr_npcat" title="npcat">
                                            <option value="1" selected>1 - Skin/Cloth</option>
                                            <option value="2">2 - Robes</option>
                                            <option value="3">3 - Light Hide</option>
                                            <option value="4">4 - Heavy Hide</option>
                                            <option value="5">5 - Leather Jerkin</option>
                                            <option value="6">6 - Leather Coat</option>
                                            <option value="7">7 - Reinforced Leather Coat</option>
                                            <option value="8">8 - Rein. Full-Length Leather Coat</option>
                                            <option value="9">9 - Rigid Leather Breastplate</option>
                                            <option value="10">10 - Rigid Leather Breastplate & Greaves</option>
                                            <option value="11">11 - Half-Hide Plate</option>
                                            <option value="12">12 - Full-Hide Plate</option>
                                            <option value="13">13 - Chain Shirt</option>
                                            <option value="14">14 - Chain Shirt & Greaves</option>
                                            <option value="15">15 - Full Chain</option>
                                            <option value="16">16 - Chain Hauberk</option>
                                            <option value="17">17 - Metal Breastplate</option>
                                            <option value="18">18 - Metal Breastplate & Greaves</option>
                                            <option value="19">19 - Half Plate</option>
                                            <option value="20">20 - Full Plate</option>
                                        </select>
                                    </span>
                                    <span class="sheet-table-data"> &nbsp; &nbsp; &nbsp; DB: <input type="text" style="width: 55px;" name="attr_npcdb" title="npcdb" value="0"> <input type="text" style="width: 25px;" name="attr_npcshield" title="npcshield" value="s"></span>
                                    <span class="sheet-table-data"><input type="hidden" name="attr_at" title="at" value="d0+ @{npcat}[npc] +@{atworn}[pc]-1"></span>
                                    <span class="sheet-table-data"><input type="hidden" name="attr_db" title="db" value="d0+ @{npcdb}[npc] +@{dbworn}[pc]"></span>  
                                </div>
                            </td>
                        </tr>
                    </table>
                    <br>
                    Special defences/other combat information:
                    <textarea rows="3" cols="55" style="width: 795px;" name="attr_npcspecialdefences" title="npcspecialdefences"> </textarea>
                    <hr />
                </div>
                <table>
                    <input type="checkbox" class="sheet-pc-attacks-show sheet-arrow" title="attacks-show" name="attr_attacks-show" value="1" checked />
                    <span></span>
                    <td class="sheet-statlabel-big" style="width: 900px;">Attacks</td>
                </table>
                <div class="sheet-pc-attacks">
                    Attacks:  (reminder: &radic;=(if non-tiny crit, then next rnd); &laquo;=(if non-tiny crit, then same rnd))
                    <textarea rows="3" cols="55" style="width: 750px;" name="attr_npcatts" title="npcatts"> </textarea>
                    <table border="0">
                        
                        <tr>
                            <td> <div style="font-weight: bold; width: 140px;">Attack/Weapon</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Type</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">OB</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Fumble</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Str</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">B#</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Range</div></td>
                            <td> <div class="sheet-table-data-attacks" style="font-weight: bold;">Macro</div></td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack1name" title="npcattack1name" value="Attack Name"></td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack1type" title="npcattack1type">
                                    
                                    <option type="text" value="[[1d100!>96+@{npcattack1bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]] (fumble on [[1d1*@{npcattack1fumble}+@{npcattack1bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]] or less)">Ranged</option>
                                    <option type="text" value="[[1d100+@{npcattack1bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96+@{npcattack1bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100!>96+@{npcattack1bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack1fumble}+@{npcattack1bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack1fumble}+@{npcattack1bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack1bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack1bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack1bonus" title="npcattack1bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack1fumble" title="npcattack1fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack1str" title="npcattack1str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack1breakage" title="npcattack1breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack1range" title="npcattack1range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack1macro" title="npcattack1macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack1name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack1type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack1" title="npcattack1" value="/w gm @{npcattack1macro}" style="width: 20px;"></button> </td>
                            
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack2name" title="npcattack2name" value="Attack Name"></td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack2type" title="npcattack2type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack2fumble}+@{npcattack2bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack2fumble}+@{npcattack2bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack2bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack2bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack2bonus" title="npcattack2bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack2fumble" title="npcattack2fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack2str" title="npcattack2str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack2breakage" title="npcattack2breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack2range" title="npcattack2range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack2macro" title="npcattack2macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack2name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack2type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack2" title="npcattack2" value="/w gm @{npcattack2macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack3name" title="npcattack3name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack3type" title="npcattack3type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack3fumble}+@{npcattack3bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack3fumble}+@{npcattack3bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack3bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack3bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack3bonus" title="npcattack3bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack3fumble" title="npcattack3fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack3str" title="npcattack3str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack3breakage" title="npcattack3breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack3range" title="npcattack3range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack3macro" title="npcattack3macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack3name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack3type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack3" title="npcattack3" value="/w gm @{npcattack3macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack4name" title="npcattack4name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack4type" title="npcattack4type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack4fumble}+@{npcattack4bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack4fumble}+@{npcattack4bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack4bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack4bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack4bonus" title="npcattack4bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack4fumble" title="npcattack4fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack4str" title="npcattack4str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack4breakage" title="npcattack4breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack4range" title="npcattack4range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack4macro" title="npcattack4macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack4name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack4type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack4" title="npcattack4" value="/w gm @{npcattack4macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack5name" title="npcattack5name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack5type" title="npcattack5type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack5fumble}+@{npcattack5bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack5fumble}+@{npcattack5bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack5bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack5bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack5bonus" title="npcattack5bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack5fumble" title="npcattack5fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack5str" title="npcattack5str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack5breakage" title="npcattack5breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack5range" title="npcattack5range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack5macro" title="npcattack5macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack5name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack5type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack5" title="npcattack5" value="/w gm @{npcattack5macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack6name" title="npcattack6name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack6type" title="npcattack6type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack6fumble}+@{npcattack6bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack6fumble}+@{npcattack6bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack6bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack6bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack6bonus" title="npcattack6bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack6fumble" title="npcattack6fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack6str" title="npcattack6str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack6breakage" title="npcattack6breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack6range" title="npcattack6range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack6macro" title="npcattack6macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack6name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack6type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack6" title="npcattack6" value="/w gm @{npcattack6macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack7name" title="npcattack7name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack7type" title="npcattack7type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack7fumble}+@{npcattack7bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack7fumble}+@{npcattack7bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack7bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack7bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack7bonus" title="npcattack7bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack7fumble" title="npcattack7fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack7str" title="npcattack7str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack7breakage" title="npcattack7breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack7range" title="npcattack7range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack7macro" title="npcattack7macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack7name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack7type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack7" title="npcattack7" value="/w gm @{npcattack7macro}" style="width: 20px;"></button> </td>
                        </tr>
                        <tr>
                            <td><input type="text" class="sheet-table-data-center" style="width: 140px;" name="attr_npcattack8name" title="npcattack8name" value="Attack Name"> </td>
                            <td>
                                <select class="sheet-inputbox" style="height: 24px; width: 94px; font-size: 0.75em; margin-bottom: 0;" name="attr_npcattack8type" title="npcattack8type">
                                    <option type="text" value="[[1d100!>96cf<@{npcattack8fumble}+@{npcattack8bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]-(100-?{% Activity used on attack|100})-@{target|dbworn}[target db] ]]" selected>Melee</option>
                                    <option type="text" value="[[1d100!>96cf<@{npcattack8fumble}+@{npcattack8bonus}[OB]+?{Position Bonus?|0}[Position]+?{Status Bonus/Penalty?|0}[Status]+?{Parry(db adjust)|0}[Parry]+?{Range Modification|0}[Range]+?{Missile Attack Penalty(-5 for AT6; -10 for AT10/14/18; -15 for AT7/8; -20 for AT11/15/16; -30 for AT12/19; -40 for AT20)|0}-(60-?{% Activity used on missile attack|60})-@{target|dbworn}[target db] ]]">Ranged</option>
                                    <option type="text" value="[[1d100cf<2cs>96+@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range] ]]">Basic Spell</option>
                                    <option type="text" value="[[1d100!>96cf<2cs=100+@{npcattack8bonus}[OB]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]-@{target|dbworn}[target db] ]]">Directed Spell</option>
                                    <option type="text" value="[[1d100cf<4cs>96+@{npcattack8bonus}[List Ranks]+?{Special Item Bonus?|0}[Item]+?{Status Bonus/Penalty?|0}[Status]+?{Range Modification|0}[Range]+20*?{Center point of spell?(1=yes)|0}[Spell Center]-@{target|dbworn}[target db] + .5*@{target|dbarmdbworn}[adjustment for only 1/2 armor bonus to db] ]]">Area Spell</option>
                                </select>
                            </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack8bonus" title="npcattack8bonus (use List ranks for Basic and Area spell attacks; use total skill bonus for weapon skill otherwise.  Enhancement bonuses from items whether magical or non-magical go in the item column in the appropriate skill.)" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack8fumble" title="npcattack8fumble" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack8str" title="npcattack8str" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack8breakage" title="npcattack8breakage" value="0"> </td>
                            <td><input type="text" class="sheet-table-data-attacks" name="attr_npcattack8range" title="npcattack8range" value="-"> </td>
                            
                            <td><textarea rows="1" cols="55" class="sheet-table-data" style="width: 350px; height: 19px;" name="attr_npcattack8macro" title="npcattack8macro">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_name} attacks **@{target|token_name}**}} {{subtags=@{npcattack8name} vs AT:[[@{target|atworn}]]}} {{subtags2=DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] or [[@{target|bar2}-@{target|dbworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack8type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} </textarea>  </td>
                            <td><button type="roll" name="attr_npcattack8" title="npcattack8" value="/w gm @{npcattack8macro}" style="width: 20px;"></button> </td>
                        </tr>
                    </table>
                    <hr />
                </div>
                <hr />
            </div>
    </div>
    </label>
</div>


<div class="sheet-tab-content sheet-tab9">
    
    <table style="width:100%;" class="sheet-table-row" cellpadding="0" cellspacing="0">
        <tr>
            <td colspan="2" class="sheet-statlabel-big-gray" style="width:800px; height: 35px; font-size: 1.5em;">Roll Templates</td>
        </tr>
    </table>
    <input type="checkbox" class="sheet-pc-rolltemplates-show sheet-arrow" title="rolltemplates-show" name="attr_rolltemplates-show" value="1" checked /><span style="text-align: left;">Show Roll Templates?</span>
    <div class="sheet-pc-rolltemplates">
        <table>
            <tr>
                <td style="text-align: left;">
                    All of the roll templates use the flags initflag, skillcatflag, skillflag, saveflag, abilityflag, spellflag, pcflag, npcflag, and basicflag to vary the roll template appearance.  See below for more details.
                    <br>
                    <br> The RMSSAttack roll template allows up to 8 attacks to be displayed in the same template.  If attackroll# is a critical failure, it will display fumbleroll#.  Crit# and critroll# always display.
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Attack: </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSAttack">
                                <table>
                                    <tr><th>Name</th></tr>
                                    <tr><td class="subheader">subtags</td></tr>
                                    <tr><td class="subheader">subtags2</td></tr>
                                    <tr class="arrow-container"><td><div class="arrow-right"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname1 attackroll1 fumbleroll1 crit1 critroll1</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname2 attackroll2 fumbleroll2 crit2 critroll2</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname3 attackroll3 fumbleroll3 crit3 critroll3</td></tr>
                                    <tr class="sheet-tr-repeating"><td> ... </td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname8 attackroll8 fumbleroll8 crit8 critroll8</td></tr>
                                    <tr><td class="sheet-table-left"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_exampleattack" title="exampleattack">&{template:RMSSAttack} {{pcflag=true}} {{name=@{character_name} }} {{subtags=attacks mightily }} {{attackname1=A1 (@{attack1name}):}} {{attackroll1=@{attack1type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit:}} {{critroll1=[[1d100cf=66cs=100]]}} {{attackname2=A2 (@{attack2name}):}} {{attackroll2=@{attack2type} }} {{fumbleroll2=Fumble: [[d100]]}} {{crit2=| Crit: }} {{critroll2=[[1d100cf=66cs=100]]}} </textarea>
                        <button type="roll" name="attr_exampleattackroll" title="exampleattackroll" value="@{exampleattack}"></button>
                        <br> The pcflag sets the name and dividing line to be red.  For this flag, the arrow in the dividing line points to the right.
                        <br> This example displays two attacks pulled from Attack/Weapon 1 and 2.
                    </div>
                    <br>
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Attack v2 (NPC): </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSAttack">
                                <table>
                                    <tr><th>Name</th></tr>
                                    <tr><td class="subheader">subtags</td></tr>
                                    <tr><td class="subheader">subtags2</td></tr>
                                    <tr class="arrow-container"><td><div class="arrow-left"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname1 attackroll1 fumbleroll1 crit1 critroll1</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname2 attackroll2 fumbleroll2 crit2 critroll2</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname3 attackroll3 fumbleroll3 crit3 critroll3</td></tr>
                                    <tr class="sheet-tr-repeating"><td> ... </td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left"> attackname8 attackroll8 fumbleroll8 crit8 critroll8</td></tr>
                                    <tr><td class="sheet-table-left"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_examplenpcattack" title="examplenpcattack">&{template:RMSSAttack} {{npcflag=true}} {{name=@{selected|token_Name} attacks **@{target|token_Name}**}} {{subtags=@{npcattack1Name} vs AT:[[@{target|atworn}]]}} {{subtags2=Target DB:[[@{target|dbworn}]]; parry:[[@{target|dbparryworn}]] }} {{attackname1=Attack: }}{{attackroll1=@{npcattack1type} }} {{fumbleroll1=Fumble: [[d100]]}} {{crit1=| Crit: }} {{critroll1=[[1d100cf=66cs=100]]}} {{notes= [[1d100>85]] arrows break}}</textarea>
                        <button type="roll" name="attr_examplenpcattackroll" title="examplenpcattackroll" value="@{examplenpcattack}"></button>
                        <br> The npcflag sets the name and dividing line to be red.  For this flag, the arrow in the dividing line points to the left.
                        <br> Example of RMSSAttack with {{npcflag=true}} set.  Also set to whisper to the gm for the NPC's attacks.  This example uses @Target to show the defender's AT, DB, and Parry in the subtags.  If the roll is less than the fumble value set by the weapon type, it will display a d100 fumble roll.  This example has a 15% arrow break notification in the notes section.
                    </div>
                    <br>
                    <br> The RMSSInitiative roll template consists of name check and checkroll on the same line.  Notes can be added below.  There is no dividing line in this template.
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Initiative:  </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSInitiative">
                                <table>
                                    <tr><th class="sheet-table-left"> Name check checkroll </th></tr>
                                    <tr><td><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_exampleinit" title="exampleinit">&{template:RMSSInitiative} {{name=@{selected|token_Name}'s }} {{check=initiative roll: }}{{checkroll=[[2d10 + [[@{initbonus}]]  &{tracker} ]] }} </textarea>
                        <button type="roll" name="attr_exampleinitroll" title="exampleinitroll" value="@{exampleinit}"></button>
                        <br> The initflag used with the RMSSStdRoll or RMSSAttack sets the name this same yellow and also adds a thin solid yellow dividing line.
                    </div>
                    <br>
                    <br> For the RMSSStdRoll, the oedownroll is called if the checkroll results in a critical failure; so to model an open ended down d100, I call it with [[d100cf&lt;5]].
                    <br>
                    <br> If the roll type does not have an open ended down roll, but instead had a fumble, you can use the fumble roll which gets its own line in the output instead of being placed on the same line as the roll like the oedownroll does.  It is called in the same way as the oedownroll i.e.: [[d100cf&lt;@{attack1fumble}]].
                    <br>
                    <br> The crit roll activates on a critical success and also gets its own line.  For example, [[d100cs=66cs=100]] will show the critical success line for only a 66 and a 100 on the roll.
                    <br>
                    <br> The next section is a repeating section where you can give a key and a value which will be displayed in columns.  Key words which cannot be used (since they are used in other parts of the template) are: notes, subtags, subtags2, compcheck, failcheck, succeedcheck, check, checkroll, critroll, fumbleroll, oedownroll, initflag, skillcatflag, skillflag, saveflag, abilityflag, spellflag, pcflag, npcflag, basicflag, name.
                    <br>
                    <br> The compcheck line expects a comparison type roll [[d100&lt;50]] and will display the succeedcheck if the result is a 1 or the failcheck if the result is a 0.
                    <br>
                    <br> Any or all of the sections can be used; if you don't put in the key word, the section will not be displayed.  Note that you cannot use the check keyword by itself; you must include the checkroll as well for that section to display.
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Std Roll, Spell check:  </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSStdRoll">
                                <table>
                                    <tr><th class="header-spell" colspan="2">Name</th></tr>
                                    <tr><td class="subheader" colspan="2">subtags</td></tr>
                                    <tr><td class="subheader" colspan="2">subtags2</td></tr>
                                    <tr class="solid-container"><td colspan="2"><div class="arrow-spell"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">check checkroll oedownroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; fumbleroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; critroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; highlight66roll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">compcheck succeedcheck failcheck</td></tr>
                                    <tr><td class="sheet-table-left" colspan="2"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_examplespell" title="examplespell">&{template:RMSSStdRoll} {{spellflag=true}} {{name=@{character_name} casts a spell}} {{subtags=from the @{srob-list1Name} list.}} {{check= Check: }} {{checkroll=[[1d100!>96cf<5cs=100 +[[@{srob-list1totalbonus}]] +?{Other bonus/penalty?|0}]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +[[@{srob-list1totalbonus}]] +?{Other bonus/penalty?|0} ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                        <button type="roll" name="attr_examplespellroll" title="examplespellroll" value="@{examplespell}"></button>
                        <br> The spellflag sets the dividing line to be a blue 4-pointed star pattern and the name to be blue.
                    </div>
                    <br>
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Std Roll, Ability check: </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSStdRoll">
                                <table>
                                    <tr><th class="header-ability" colspan="2">Name</th></tr>
                                    <tr><td class="subheader" colspan="2">subtags</td></tr>
                                    <tr><td class="subheader" colspan="2">subtags2</td></tr>
                                    <tr class="solid-container"><td colspan="2"><div class="arrow-ability"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">check checkroll oedownroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; fumbleroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; critroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; highlight66roll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">compcheck succeedcheck failcheck</td></tr>
                                    <tr><td class="sheet-table-left" colspan="2"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_exampleability" title="exampleability">&{template:RMSSStdRoll} {{abilityflag=true}} {{name=@{character_name}'s  Strength}} {{checkroll=[[1d100!>96cf<5cs=100+3*[[@{stbonus}]] ]]}} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +3*[[@{stbonus}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                        <button type="roll" name="attr_exampleabilityroll" title="exampleabilityroll" value="@{exampleability}"></button>
                        <br> The abilityflag sets the name and dividing line brown.
                    </div>
                    <br>
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Std Roll, Save check: </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSStdRoll">
                                <table>
                                    <tr><th class="header-save" colspan="2">Name</th></tr>
                                    <tr><td class="subheader" colspan="2">subtags</td></tr>
                                    <tr><td class="subheader" colspan="2">subtags2</td></tr>
                                    <tr class="solid-container"><td colspan="2"><div class="arrow-save"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">check checkroll oedownroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; fumbleroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; critroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; highlight66roll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">compcheck succeedcheck failcheck</td></tr>
                                    <tr><td class="sheet-table-left" colspan="2"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_examplesave" title="examplesave">&{template:RMSSStdRoll} {{saveflag=true}} {{name=@{character_name} }} {{subtags=tries to block out external influences}} {{check=Will resistance roll:}} {{checkroll=[[1d100 + [[@{willsave}]] ]] }} </textarea>
                        <button type="roll" name="attr_examplesaveroll" title="examplesaveroll" value="@{examplesave}"></button>
                        <br> The saveflag sets the name and thick dividing line to be purple.
                    </div>
                    <br>
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Std Roll, Skill check: </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSStdRoll">
                                <table>
                                    <tr><th class="header-skill" colspan="2">Name</th></tr>
                                    <tr><td class="subheader" colspan="2">subtags</td></tr>
                                    <tr><td class="subheader" colspan="2">subtags2</td></tr>
                                    <tr class="solid-container"><td colspan="2"><div class="arrow-skill"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">check checkroll oedownroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; fumbleroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; critroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; highlight66roll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">compcheck succeedcheck failcheck</td></tr>
                                    <tr><td class="sheet-table-left" colspan="2"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_exampleskill" title="exampleskill">&{template:RMSSStdRoll} {{skillflag=true}} {{name=@{character_name} }} {{check=Appraisal check:}} {{checkroll=[[1d100!>96cf<5cs=100 + [[@{selected|appraisal}]] ]] }} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +[[@{selected|appraisal}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                        <button type="roll" name="attr_exampleskillroll" title="exampleskillroll" value="@{exampleskill}"></button>
                        <br> The skillflag sets the name and double-arrow dividing line a darkish green.
                    </div>
                    <br>
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Std Roll, Skill Category check: </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSStdRoll">
                                <table>
                                    <tr><th class="header-skillcat" colspan="2">Name</th></tr>
                                    <tr><td class="subheader" colspan="2">subtags</td></tr>
                                    <tr><td class="subheader" colspan="2">subtags2</td></tr>
                                    <tr class="solid-container"><td colspan="2"><div class="arrow-skillcat"></div></td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">check checkroll oedownroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; fumbleroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; critroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; highlight66roll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">compcheck succeedcheck failcheck</td></tr>
                                    <tr><td class="sheet-table-left" colspan="2"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_exampleskillcat" title="exampleskillcat">&{template:RMSSStdRoll} {{skillcatflag=true}} {{name=@{character_name} }} {{check=Athletic-Brawn cat check:}} {{checkroll=[[1d100!>96cf<5cs=100 +[[@{selected|cat-athletic-brawn}]] ]] }} {{oedownroll= -[[1d100!>96[open ended down roll; subtract from previous roll] ]]}} {{critroll= **Check for Nat 100!!!!**}} {{highlight66= [[66 +[[@{selected|cat-athletic-brawn}]] ]]}} {{highlight66roll=**Natural 66.** }} </textarea>
                        <button type="roll" name="attr_exampleskillcatroll" title="exampleskillcatroll" value="@{exampleskillcat}"></button>
                        <br> The skillcatflag sets the dividing line to be an upward pointed arrow and both it and the name a teal color.
                    </div>
                    <br>
                    <div class="sheet-table-row">
                        <span class="sheet-table-header-left" style="width: 124px;"> Std Roll, Basic: </span>
                        <span class="sheet-table-header-left" style="width: 218px;">
                            <div class="sheet-rolltemplate-RMSSStdRoll">
                                <table>
                                    <tr><th class="header-basic" colspan="2">Name</th></tr>
                                    <tr><td class="subheader" colspan="2">subtags</td></tr>
                                    <tr><td class="subheader" colspan="2">subtags2</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">check checkroll oedownroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; fumbleroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; critroll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2"> &nbsp; &nbsp; &nbsp; highlight66roll</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left">key</td><td class="sheet-table-left"> value</td></tr>
                                    <tr class="sheet-tr-repeating"><td class="sheet-table-left" colspan="2">compcheck succeedcheck failcheck</td></tr>
                                    <tr><td class="sheet-table-left" colspan="2"><span class="tcat">notes</span></td></tr>
                                </table>
                            </div>
                        </span>
                        <span class="sheet-table-header-right" style="width: 117px;"> Example macro: </span><textarea input class="sheet-inputbox" rows="6" cols="55" style="height: 80px; width: 296px;" name="attr_examplerepeating" title="examplerepeating">&{template:RMSSStdRoll} {{basicflag=true}} {{name=Test Attack}} {{subtags=swinging violently}} {{subtags2=at the kitchen sink.}} {{note= This is some note content}} {{Saving Throw= [[d100+ [[@{willsave}]] ]] vs Will}} {{Attack1=[[1d100!>96cf<5]]}} {{Crit1=[[1d100]]}} {{Attack2=[[1d100!>96cf<5]]}} {{Crit2=[[1d100]]}} {{Attack3=[[1d100!>96cf<5]]}} {{Crit3=[[1d100]]}} {{compcheck= Climbing:[[{1d100+[[@{climbing}]] }>111]] }} {{succeedcheck=Success! It works this round!}}  {{failcheck=Uh oh.  You are slipping. }} {{notes=Additional notes under the notes tag will be at the bottom.}} </textarea>
                        <button type="roll" name="attr_examplerepeatingroll" title="examplerepeatingroll" value="@{examplerepeating}"></button>
                        <br> This basic grey and white appearance can be used with the various templates by setting {{basicflag=true}} .  There is no dividing line with this appearance flag.
                    </div>
                </td>
            </tr>
        </table>

        <rolltemplate class="sheet-rolltemplate-RMSSAttack">
            <table>
                {{#pcflag}}
                <tr><th class="header-attack">{{name}}</th></tr> {{/pcflag}}
                {{#npcflag}}
                <tr><th class="header-attack">{{name}}</th></tr> {{/npcflag}}
                {{#spellflag}}
                <tr><th class="header-spell">{{name}}</th></tr> {{/spellflag}}
                {{#abilityflag}}
                <tr><th class="header-ability">{{name}}</th></tr> {{/abilityflag}}
                {{#saveflag}}
                <tr><th class="header-save">{{name}}</th></tr> {{/saveflag}}
                {{#skillflag}}
                <tr><th class="header-skill">{{name}}</th></tr> {{/skillflag}}
                {{#skillcatflag}}
                <tr><th class="header-skillcat">{{name}}</th></tr> {{/skillcatflag}}
                {{#initflag}}
                <tr><th class="header-initiative">{{name}}</th></tr> {{/initflag}}
                {{#basicflag}}
                <tr><th class="header-basic">{{name}}</th></tr> {{/basicflag}}
                {{^initflag}} {{^skillcatflag}} {{^skillflag}} {{^saveflag}} {{^abilityflag}} {{^spellflag}} {{^pcflag}} {{^npcflag}} {{^basicflag}}
                <tr><th class="header-basic">{{name}}</th></tr> {{/basicflag}} {{/npcflag}} {{/pcflag}} {{/spellflag}}{{/abilityflag}} {{/saveflag}} {{/skillflag}} {{/skillcatflag}} {{/initflag}}
                {{#subtags}}
                <tr><td class="subheader">{{subtags}}</td></tr>
                {{/subtags}}
                {{#subtags2}}
                <tr><td class="subheader">{{subtags2}}</td></tr>
                {{/subtags2}}
                {{#npcflag}}
                <tr class="arrow-container"><td><div class="arrow-left"></div></td></tr> {{/npcflag}}
                {{#pcflag}}
                <tr class="arrow-container"><td><div class="arrow-right"></div></td></tr> {{/pcflag}}
                {{#spellflag}}
                <tr class="arrow-container"><td><div class="arrow-spell"></div></td></tr> {{/spellflag}}
                {{#abilityflag}}
                <tr class="arrow-container"><td><div class="arrow-ability"></div></td></tr> {{/abilityflag}}
                {{#saveflag}}
                <tr class="arrow-container"><td><div class="arrow-save"></div></td></tr> {{/saveflag}}
                {{#skillflag}}
                <tr class="arrow-container"><td><div class="arrow-skill"></div></td></tr> {{/skillflag}}
                {{#skillcatflag}}
                <tr class="arrow-container"><td><div class="arrow-skillcat"></div></td></tr> {{/skillcatflag}}
                {{#initflag}}
                <tr class="arrow-container"><td><div class="arrow-initiative"></div></td></tr> {{/initflag}}
                {{#attackname1}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname1}} {{attackroll1}}
                        {{#rollWasFumble() attackroll1}} {{fumbleroll1}} {{/rollWasFumble() attackroll1}}
                        {{^rollWasFumble() attackroll1}} {{crit1}} {{critroll1}} {{/rollWasFumble() attackroll1}}
                    </td>
                </tr>
                {{/attackname1}}
                {{#attackname2}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname2}} {{attackroll2}}
                        {{#rollWasFumble() attackroll2}} {{fumbleroll2}} {{/rollWasFumble() attackroll2}}
                        {{^rollWasFumble() attackroll2}} {{crit2}} {{critroll2}} {{/rollWasFumble() attackroll2}}
                    </td>
                </tr>
                {{/attackname2}}
                {{#attackname3}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname3}} {{attackroll3}}
                        {{#rollWasFumble() attackroll3}} {{fumbleroll3}} {{/rollWasFumble() attackroll3}}
                        {{^rollWasFumble() attackroll3}} {{crit3}} {{critroll3}} {{/rollWasFumble() attackroll3}}
                    </td>
                </tr>
                {{/attackname3}}
                {{#attackname4}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname4}} {{attackroll4}}
                        {{#rollWasFumble() attackroll4}} {{fumbleroll4}} {{/rollWasFumble() attackroll4}}
                        {{^rollWasFumble() attackroll4}} {{crit4}} {{critroll4}} {{/rollWasFumble() attackroll4}}
                    </td>
                </tr>
                {{/attackname4}}
                {{#attackname5}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname5}} {{attackroll5}}
                        {{#rollWasFumble() attackroll5}} {{fumbleroll5}} {{/rollWasFumble() attackroll5}}
                        {{^rollWasFumble() attackroll5}} {{crit5}} {{critroll5}} {{/rollWasFumble() attackroll5}}
                    </td>
                </tr>
                {{/attackname5}}
                {{#attackname6}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname6}} {{attackroll6}}
                        {{#rollWasFumble() attackroll6}} {{fumbleroll6}} {{/rollWasFumble() attackroll6}}
                        {{^rollWasFumble() attackroll6}} {{crit6}} {{critroll6}} {{/rollWasFumble() attackroll6}}
                    </td>
                </tr>
                {{/attackname6}}
                {{#attackname7}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname7}} {{attackroll7}}
                        {{#rollWasFumble() attackroll7}} {{fumbleroll7}} {{/rollWasFumble() attackroll7}}
                        {{^rollWasFumble() attackroll7}} {{crit7}} {{critroll7}} {{/rollWasFumble() attackroll7}}
                    </td>
                </tr>
                {{/attackname7}}
                {{#attackname8}}
                <tr class="sheet-tr-repeating">
                    <td>
                        {{attackname8}} {{attackroll8}}
                        {{#rollWasFumble() attackroll8}} {{fumbleroll8}} {{/rollWasFumble() attackroll8}}
                        {{^rollWasFumble() attackroll8}} {{crit8}} {{critroll8}} {{/rollWasFumble() attackroll8}}
                    </td>
                </tr>
                {{/attackname8}}
                {{#notes}}
                <tr><td><span class="tcat">{{notes}}</span></td></tr>
                {{/notes}}
            </table>
        </rolltemplate>

        <rolltemplate class="sheet-rolltemplate-RMSSStdRoll">
            <table>
                {{#pcflag}}
                <tr><th class="header-attack" colspan="2">{{name}}</th></tr> {{/pcflag}}
                {{#npcflag}}
                <tr><th class="header-attack" colspan="2">{{name}}</th></tr> {{/npcflag}}
                {{#spellflag}}
                <tr><th class="header-spell" colspan="2">{{name}}</th></tr> {{/spellflag}}
                {{#abilityflag}}
                <tr><th class="header-ability" colspan="2">{{name}}</th></tr> {{/abilityflag}}
                {{#saveflag}}
                <tr><th class="header-save" colspan="2">{{name}}</th></tr> {{/saveflag}}
                {{#skillflag}}
                <tr><th class="header-skill" colspan="2">{{name}}</th></tr> {{/skillflag}}
                {{#skillcatflag}}
                <tr><th class="header-skillcat" colspan="2">{{name}}</th></tr> {{/skillcatflag}}
                {{#initflag}}
                <tr><th class="header-initiative" colspan="2">{{name}}</th></tr> {{/initflag}}
                {{#basicflag}}
                <tr><th class="header-basic" colspan="2">{{name}}</th></tr> {{/basicflag}}
                {{^initflag}} {{^skillcatflag}} {{^skillflag}} {{^saveflag}} {{^abilityflag}} {{^spellflag}} {{^pcflag}} {{^npcflag}} {{^basicflag}}
                <tr><th class="header-basic" colspan="2">{{name}}</th></tr> {{/basicflag}} {{/npcflag}} {{/pcflag}} {{/spellflag}}{{/abilityflag}} {{/saveflag}} {{/skillflag}} {{/skillcatflag}} {{/initflag}}
                {{#subtags}}
                <tr><td class="subheader" colspan="2">{{subtags}}</td></tr>
                {{/subtags}}
                {{#subtags2}}
                <tr><td class="subheader" colspan="2">{{subtags2}}</td></tr>
                {{/subtags2}}
                {{#npcflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-left"></div></td></tr> {{/npcflag}}
                {{#pcflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-right"></div></td></tr> {{/pcflag}}
                {{#spellflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-spell"></div></td></tr> {{/spellflag}}
                {{#abilityflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-ability"></div></td></tr> {{/abilityflag}}
                {{#saveflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-save"></div></td></tr> {{/saveflag}}
                {{#skillflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-skill"></div></td></tr> {{/skillflag}}
                {{#skillcatflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-skillcat"></div></td></tr> {{/skillcatflag}}
                {{#initflag}}
                <tr class="arrow-container"><td colspan="2"><div class="arrow-initiative"></div></td></tr> {{/initflag}}
                {{#checkroll}}
                <tr class="sheet-tr-repeating">
                    <td colspan="2">
                        {{check}} {{checkroll}}
                        {{#rollWasFumble() checkroll}} {{oedownroll}} {{/rollWasFumble() checkroll}}
                    </td>
                </tr>
                {{#fumbleroll}} {{#rollWasFumble() checkroll}}
                <tr class="sheet-tr-repeating"><td colspan="2"> &nbsp; &nbsp; &nbsp; &nbsp; {{fumbleroll}} </td></tr> {{/rollWasFumble() checkroll}} {{/fumbleroll}}
                {{#critroll}} {{#rollWasCrit() checkroll}}
                <tr class="sheet-tr-repeating"><td colspan="2"> &nbsp; &nbsp; &nbsp; &nbsp; {{critroll}} </td></tr> {{/rollWasCrit() checkroll}} {{/critroll}}
                {{#highlight66roll}} {{#rollTotal() checkroll highlight66}}
                <tr class="sheet-tr-repeating"><td colspan="2"> &nbsp; &nbsp; &nbsp; &nbsp; {{highlight66roll}} </td></tr> {{/rollTotal() checkroll highlight66}} {{/highlight66roll}}
                {{/checkroll}}
                {{#allprops() notes subtags subtags2 compcheck failcheck succeedcheck check checkroll critroll fumbleroll oedownroll highlight66 highlight66roll initflag skillcatflag skillflag saveflag abilityflag spellflag pcflag npcflag basicflag name}}
                <tr class="sheet-tr-repeating"><td>{{key}} </td><td>{{value}} </td></tr>
                {{/allprops() notes subtags subtags2 compcheck failcheck succeedcheck check checkroll critroll fumbleroll oedownroll highlight66 highlight66roll initflag skillcatflag skillflag saveflag abilityflag spellflag pcflag npcflag basicflag name}}
                {{#compcheck}}
                <tr class="sheet-tr-repeating">
                    <td colspan="2">
                        {{compcheck}}
                        {{#rollTotal() compcheck 1}} {{succeedcheck}} {{/rollTotal() compcheck 1}}
                        {{#rollTotal() compcheck 0}} {{failcheck}} {{/rollTotal() compcheck 0}}
                    </td>
                </tr>
                {{/compcheck}}
                {{#notes}}
                <tr><td colspan="2"><span class="tcat">{{notes}}</span></td></tr>
                {{/notes}}
            </table>
        </rolltemplate>

        <rolltemplate class="sheet-rolltemplate-RMSSInitiative">
            <table>
                {{#pcflag}}
                <tr><th class="header-attack">{{name}} {{check}} {{checkroll}} </th></tr> {{/pcflag}}
                {{#npcflag}}
                <tr><th class="header-attack">{{name}} {{check}} {{checkroll}} </th></tr> {{/npcflag}}
                {{#spellflag}}
                <tr><th class="header-spell">{{name}} {{check}} {{checkroll}} </th></tr> {{/spellflag}}
                {{#abilityflag}}
                <tr><th class="header-ability">{{name}} {{check}} {{checkroll}} </th></tr> {{/abilityflag}}
                {{#saveflag}}
                <tr><th class="header-save">{{name}} {{check}} {{checkroll}} </th></tr> {{/saveflag}}
                {{#skillflag}}
                <tr><th class="header-skill">{{name}} {{check}} {{checkroll}} </th></tr> {{/skillflag}}
                {{#skillcatflag}}
                <tr><th class="header-skillcat">{{name}} {{check}} {{checkroll}} </th></tr> {{/skillcatflag}}
                {{#initflag}}
                <tr><th class="header-initiative">{{name}} {{check}} {{checkroll}} </th></tr> {{/initflag}}
                {{#basicflag}}
                <tr><th class="header-basic">{{name}} {{check}} {{checkroll}} </th></tr> {{/basicflag}}
                {{^initflag}} {{^skillcatflag}} {{^skillflag}} {{^saveflag}} {{^abilityflag}} {{^spellflag}} {{^pcflag}} {{^npcflag}} {{^basicflag}}
                <tr><th class="header-initiative" colspan="2">{{name}} {{check}} {{checkroll}} </th></tr> {{/basicflag}} {{/npcflag}} {{/pcflag}} {{/spellflag}}{{/abilityflag}} {{/saveflag}} {{/skillflag}} {{/skillcatflag}} {{/initflag}}
                {{#notes}}
                <tr class="rowcolor"><td><span class="tcat">{{notes}}</span></td></tr>
                {{/notes}}
            </table>
        </rolltemplate>

    </div>
</div>
<p style="font-size: 0.6em;">V1.1.6 7/29/15 (No calcs; nested; highlighted 66 rolls)</p>

<script type="text/worker">

    /// Rank Bonus ///
    const generalSkillsRanks = ['weapon1he1ranks', 'weapon1hc1ranks', 'weapon2hand1ranks', 'weaponthrown1ranks', 'weaponmissile1ranks', 'weaponpolearm1ranks', 'brawlingranks',
    'readrunesranks', 'useitemsranks', 'directedspellsranks', 'ppdevranks', 'channelingranks', 'softleatherranks', 'rigidleatherranks', 'chainranks', 'plateranks',
    'generalperceptranks', 'picklocksranks', 'disarmingtrapsranks', 'climbingranks', 'swimmingranks', 'riding1ranks', 'stalkingranks', 'ambushranks'];

    generalSkillsRanks.forEach(function (stat) {
    on("change:" + stat + " sheet:opened", function () {
    getAttrs([stat], function (values) {
    let ranks = parseInt(values[stat]);

    if (ranks <= 10) {
    setAttrs({ [stat + 'bonus']: (ranks * 5) });
    }
    else if (ranks > 10 && ranks <= 20) {
    setAttrs({ [stat + 'bonus']: ((ranks - 10) * 2) + 50 });
    }
    else if (ranks > 20 && ranks <= 30) {
    setAttrs({ [stat + 'bonus']: ((ranks - 20) * 1) + 50 + 20 });
    }
    else {
    setAttrs({ [stat + 'bonus']: ((ranks - 30) * .5) + 50 + 20 + 10 });
    }
    });
    });
    });

    on("change:repeating_skills:skillranks remove:repeating_skills:skillranks", function (evt) {
    let id = evt.sourceAttribute.slice(17, 37);
    getAttrs(["repeating_skills_" + id + "_skillranksbonus"], function (values) {
    let ranks = parseInt(evt.newValue);

    if (ranks <= 10) {
    setAttrs({ ["repeating_skills_" + id + "_skillranksbonus"]: (ranks * 5) });
    }
    else if (ranks > 10 && ranks <= 20) {
    setAttrs({ ["repeating_skills_" + id + "_skillranksbonus"]: ((ranks - 10) * 2) + 50 });
    }
    else if (ranks > 20 && ranks <= 30) {
    setAttrs({ ["repeating_skills_" + id + "_skillranksbonus"]: ((ranks - 20) * 1) + 50 + 20 });
    }
    else {
    setAttrs({ ["repeating_skills_" + id + "_skillranksbonus"]: ((ranks - 30) * .5) + 50 + 20 + 10 });
    }
    });
    });


    /// Level Bonus ///
    const generalSkillsLevelBonus = ['weapon1he1lvlbonus', 'weapon1hc1lvlbonus', 'weapon2hand1lvlbonus', 'weaponthrown1lvlbonus', 'weaponmissile1lvlbonus', 'weaponpolearm1lvlbonus',
    'brawlinglvlbonus', 'bodydevLvlbonus', 'readruneslvlbonus', 'useitemslvlbonus', 'directedspellslvlbonus', 'ppdevlvlbonus', 'channelinglvlbonus', 'softleatherlvlbonus',
    'rigidleatherlvlbonus', 'chainlvlbonus', 'platelvlbonus', 'generalperceptlvlbonus', 'picklockslvlbonus', 'disarmingtrapslvlbonus', 'climbinglvlbonus', 'swimminglvlbonus',
    'riding1lvlbonus', 'stalkinglvlbonus', 'ambushlvlbonus'];

    generalSkillsLevelBonus.forEach(function (stat) {
    on("change:" + stat + " sheet:opened", function (evt) {
    getAttrs(['level', stat], function (values) {
    let lvl = parseInt(values["level"]);

    if ((evt.newValue != 0 && evt.newValue <= 3) && lvl > 0) {
    if (lvl > 0 && lvl <= 20) {
    setAttrs({ [stat]: evt.newValue * lvl });
    }
    else {
    if (evt.newValue == 3) {
    setAttrs({ [stat]: ((lvl - 20) * 1) + 60 });
    }
    else if (evt.newValue == 2) {
    setAttrs({ [stat]: ((lvl - 20) * .5) + 40 });
    }
    else if (evt.newValue == 1) {
    setAttrs({ [stat]: 20 });
    }
    }
    }
    });
    });
    });

    on("change:repeating_skills:skilllvlbonus remove:repeating_skills:skilllvlbonus", function (evt) {
    let id = evt.sourceAttribute.slice(17, 37);
    getAttrs(["level", "repeating_skills_" + id + "_skilllvlbonus"], function (values) {
    let lvl = parseInt(values["level"]);
    if ((evt.newValue != 0 && evt.newValue <= 3) && lvl > 0) {
    if (lvl > 0 && lvl <= 20) {
    setAttrs({ ["repeating_skills_" + id + "_skilllvlbonus"]: evt.newValue * lvl });
    }
    else {
    if (evt.newValue == 3) {
    setAttrs({ ["repeating_skills_" + id + "_skilllvlbonus"]: ((lvl - 20) * 1) + 60 });
    }
    else if (evt.newValue == 2) {
    setAttrs({ ["repeating_skills_" + id + "_skilllvlbonus"]: ((lvl - 20) * .5) + 40 });
    }
    else if (evt.newValue == 1) {
    setAttrs({ ["repeating_skills_" + id + "_skilllvlbonus"]: 20 });
    }
    }
    }
    });
    });

    /// Multiple StatBonus Divison Corrector ///
    on("change:repeating_skills:skillstatnames1 change:repeating_skills:skillstatnames2 change:repeating_skills:skillname remove:repeating_skills:skillstatnames1 remove:repeating_skills:skillstatnames2", function (evt) {
    let id = evt.sourceAttribute.slice(17, 37);
    getAttrs(["agbasebonus","agracial","agspecial",
    "cobasebonus","coracial","cospecial",
    "mebasebonus","meracial","mespecial",
    "rebasebonus","reracial","respecial",
    "sdbasebonus","sdracial","sdspecial",
    "embasebonus","emracial","emspecial",
    "inbasebonus","inracial","inspecial",
    "prbasebonus","prracial","prspecial",
    "qubasebonus","quracial","quspecial",
    "stbasebonus", "stracial", "stspecial",
    "repeating_skills_" + id + "_skillstatnames1",
    "repeating_skills_" + id + "_skillstatnames2"], function (values) {

    let primaryStat = GetStatBonus(values["repeating_skills_" + id + "_skillstatnames1"], values);
    let secondaryStat = GetStatBonus(values["repeating_skills_" + id + "_skillstatnames2"], values);

    if (secondaryStat > 0) {
    console.log("Total: " + (primaryStat + secondaryStat / 2));
    setAttrs({ ["repeating_skills_" + id + "_skillstatbonus"]: ((parseInt(primaryStat) + parseInt(secondaryStat)) / 2) });
    }
    else {
    console.log("Total: " + parseInt(primaryStat));
    setAttrs({ ["repeating_skills_" + id + "_skillstatbonus"]: primaryStat });
    }
    });
    });

    function GetStatBonus(stat, values) {
    switch (stat) {
    case "1":
    return (parseInt(values["stbasebonus"]) + parseInt(values["stracial"]) + parseInt(values["stspecial"]));
    break;
    case "2":
    return (parseInt(values["agbasebonus"]) + parseInt(values["agracial"]) + parseInt(values["agspecial"]));
    break;
    case "3":
    return (parseInt(values["qubasebonus"]) + parseInt(values["quracial"]) + parseInt(values["quspecial"]));
    break;
    case "4":
    return (parseInt(values["cobasebonus"]) + parseInt(values["coracial"]) + parseInt(values["cospecial"]));
    break;
    case "5":
    return (parseInt(values["mebasebonus"]) + parseInt(values["meracial"]) + parseInt(values["mespecial"]));
    break;
    case "6":
    return (parseInt(values["rebasebonus"]) + parseInt(values["reracial"]) + parseInt(values["respecial"]));
    break;
    case "7":
    return (parseInt(values["sdbasebonus"]) + parseInt(values["sdracial"]) + parseInt(values["sdspecial"]));
    break;
    case "8":
    return (parseInt(values["embasebonus"]) + parseInt(values["emracial"]) + parseInt(values["emspecial"]));
    break;
    case "9":
    return (parseInt(values["inbasebonus"]) + parseInt(values["inracial"]) + parseInt(values["inspecial"]));
    break;
    case "10":
    return (parseInt(values["prbasebonus"]) + parseInt(values["prracial"]) + parseInt(values["prspecial"]));
    break;
    default:
    return 0;
    break;
    }
    }

    /// Spell Rank Bonus ///
    const spellRanks = ['srob-list1ranks',  'srob-list2ranks', 'srob-list3ranks', 'srob-list4ranks', 'srob-list5ranks', 'srob-list6ranks', 'srob-list7ranks', 'srob-list8ranks', 'srob-list9ranks', 'srob-list10ranks',
    'sropen-list1ranks','sropen-list2ranks', 'sropen-list3ranks', 'sropen-list4ranks', 'sropen-list5ranks', 'sropen-list6ranks', 'sropen-list7ranks', 'sropen-list8ranks', 'sropen-list9ranks', 'sropen-list10ranks',
    'srclosed-list1ranks','srclosed-list2ranks', 'srclosed-list3ranks', 'srclosed-list4ranks', 'srclosed-list5ranks', 'srclosed-list6ranks', 'srclosed-list7ranks', 'srclosed-list8ranks', 'srclosed-list9ranks', 'srclosed-list10ranks',
    'srotherb-list1ranks','srotherb-list2ranks', 'srotherb-list3ranks', 'srotherb-list4ranks', 'srotherb-list5ranks',
    'oropen-list1ranks','oropen-list2ranks', 'oropen-list3ranks', 'oropen-list4ranks', 'oropen-list5ranks',
    'orclosed-list1ranks','orclosed-list2ranks', 'orclosed-list3ranks', 'orclosed-list4ranks', 'orclosed-list5ranks',
    'orbase-list1ranks','orbase-list2ranks', 'orbase-list3ranks', 'orbase-list4ranks', 'orbase-list5ranks',
    'arcopen-list1ranks','arcopen-list2ranks', 'arcopen-list3ranks', 'arcopen-list4ranks', 'arcopen-list5ranks',
    'arcclosed-list1ranks','arcclosed-list2ranks', 'arcclosed-list3ranks', 'arcclosed-list4ranks', 'arcclosed-list5ranks',
    'arcbase-list1ranks','arcbase-list2ranks', 'arcbase-list3ranks', 'arcbase-list4ranks', 'arcbase-list5ranks',
    'arcotherbase-list1ranks','arcotherbase-list2ranks', 'arcotherbase-list3ranks', 'arcotherbase-list4ranks', 'arcotherbase-list5ranks'];

    spellRanks.forEach(function (stat) {
    on("change:" + stat + " sheet:opened", function () {
    getAttrs([stat], function (values) {
    let ranks = parseInt(values[stat]);
    setAttrs({ [stat + 'bonus']: (ranks * 5) });
    });
    });
    })
</script>










    {/* <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16 '>
        <Banner character={featuredCharacter} />
        {characters.map((character) => (
          <CharacterRow
            characters={character.characters}
            key={character.sectionTitle}
            sectionTitle={character.sectionTitle}
          />
        ))}
        <h1>Home</h1>
      </main>
    </div> */}
    </Suspense>
  );
}
</Suspense>
)