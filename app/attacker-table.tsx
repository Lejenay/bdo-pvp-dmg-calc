import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { initialAttackerData } from "@/static/init-attacker-data";

type Props = {
  attackerData: typeof initialAttackerData
  onInputChange: (key: string, value: string | number) => void;
}

const AttackerTable = ({
  attackerData,
  onInputChange
}: Props) => {
  return (
    <div>
      <Table>
        <TableCaption>
          <a href="https://www.reddit.com/r/blackdesertonline/comments/1ews78o/pvp_damage_formula_reversed_pvp_damage_calculator/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline">
            Original equation (external link)
          </a>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>アタッカー</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">クラス</TableCell>
            <TableCell>
              <Select
                value={attackerData.atClass}
                onValueChange={(value) => onInputChange("atClass", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="クラスを選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="warrior">ウォーリア</SelectItem>
                  <SelectItem value="ranger">レンジャー</SelectItem>
                  <SelectItem value="berserker">ジャイアント</SelectItem>
                  <SelectItem value="tamer">リトサマ</SelectItem>
                  <SelectItem value="musa">ブレイダー</SelectItem>
                  <SelectItem value="maehwa">ツバキ</SelectItem>
                  <SelectItem value="valkyrie">ヴァルキリー</SelectItem>
                  <SelectItem value="kunoichi">くのいち</SelectItem>
                  <SelectItem value="ninja">忍者</SelectItem>
                  <SelectItem value="wizard">ウィザード</SelectItem>
                  <SelectItem value="witch">ウィッチ</SelectItem>
                  <SelectItem value="mystic">ミスティック</SelectItem>
                  <SelectItem value="striker">格闘家</SelectItem>
                  <SelectItem value="archer">アーチャー</SelectItem>
                  <SelectItem value="dk">ダークナイト</SelectItem>
                  <SelectItem value="shai">シャイ</SelectItem>
                  <SelectItem value="guardian">ガーディアン</SelectItem>
                  <SelectItem value="hashashin">ハサシン</SelectItem>
                  <SelectItem value="nova">ノヴァ</SelectItem>
                  <SelectItem value="sage">セージ</SelectItem>
                  <SelectItem value="corsair">コルセア</SelectItem>
                  <SelectItem value="drakania">ドラカニア</SelectItem>
                  <SelectItem value="woosa">ウサ</SelectItem>
                  <SelectItem value="maegu">メグ</SelectItem>
                  <SelectItem value="scholar">スカラー</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">スキル参照先</TableCell>
            <TableCell>
              <Select
                value={attackerData.skillReference}
                onValueChange={(value) => onInputChange("skillReference", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="スキル参照先を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="awakening">覚醒スキル</SelectItem>
                  <SelectItem value="succession">伝承スキル</SelectItem>
                  <SelectItem value="absolute">真スキル / ラバム / マグヌス</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">表記AP</TableCell>
            <TableCell>
              <Input
                type="number"
                name="ap"
                value={attackerData.ap}
                onChange={(e) => onInputChange("ap", e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">表記AAP</TableCell>
            <TableCell>
              <Input
                type="number"
                name="aap"
                value={attackerData.aap}
                onChange={(e) => onInputChange("aap", e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">合計AP</TableCell>
            <TableCell>
              <Input
                type="number"
                name="totalAp"
                value={attackerData.totalAp}
                onChange={(e) => onInputChange("totalAp", e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">合計AAP</TableCell>
            <TableCell>
              <Input
                type="number"
                name="totalAap"
                value={attackerData.totalAap}
                onChange={(e) => onInputChange("totalAap", e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">人間族ダメージ</TableCell>
            <TableCell>
              <Input
                type="number"
                name="humanDamage"
                value={attackerData.humanDamage}
                onChange={(e) => onInputChange("humanDamage", e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">アタックの種類</TableCell>
            <TableCell>
              <Select
                value={attackerData.attackType}
                onValueChange={(value) => onInputChange("attackType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="アタックの種類を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">未選択</SelectItem>
                  <SelectItem value="down">ダウンアタック</SelectItem>
                  <SelectItem value="back">バックアタック</SelectItem>
                  <SelectItem value="air">エアアタック</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">クリダメ%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="critDamage"
                value={attackerData.critDamage}
                onChange={(e) => onInputChange("critDamage", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ダウンアタック%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="downAttack"
                value={attackerData.downAttack}
                onChange={(e) => onInputChange("downAttack", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">バックアタック%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="backAttack"
                value={attackerData.backAttack}
                onChange={(e) => onInputChange("backAttack", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">エアアタック%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="airAttack"
                value={attackerData.airAttack}
                onChange={(e) => onInputChange("airAttack", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">全ての特殊攻撃追加ダメ%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="allSpecialAttack"
                value={attackerData.allSpecialAttack}
                onChange={(e) => onInputChange("allSpecialAttack", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">命中</TableCell>
            <TableCell>
              <Input
                type="number"
                name="accuracy"
                value={attackerData.accuracy}
                onChange={(e) => onInputChange("accuracy", e.target.value)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">命中率</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="accuracyRate"
                value={attackerData.accuracyRate}
                onChange={(e) => onInputChange("accuracyRate", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">クリ率</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="critRate"
                value={attackerData.critRate}
                onChange={(e) => onInputChange("critRate", e.target.value)}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">スキルダメージ</TableCell>
            <TableCell className="flex items-center justify-center gap-2">
              <Input
                type="number"
                name="skillDamage"
                value={attackerData.skillDamage}
                onChange={(e) => onInputChange("skillDamage", e.target.value)}
              />
              <span>%</span>
              <span className="font-bold">×</span>
              <Input
                type="number"
                name="skillDamageHitTimes"
                value={attackerData.skillDamageHitTimes}
                onChange={(e) => onInputChange("skillDamageHitTimes", e.target.value)}
              />
              <span>打撃</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">スキルPVPダメ減衰%</TableCell>
            <TableCell className="flex justify-start items-center gap-2">
              <Input
                type="number"
                name="skillPvpDamageReduction"
                value={attackerData.skillPvpDamageReduction}
                onChange={(e) => onInputChange("skillPvpDamageReduction", e.target.value)}
              />
              %</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default AttackerTable;