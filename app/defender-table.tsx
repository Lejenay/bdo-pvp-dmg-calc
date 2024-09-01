import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { initialDefenderData } from "@/static/init-defender-data";

type Props = {
  defenderData: typeof initialDefenderData;
  onInputChange: (key: string, value: string | number) => void;
}

const DefenderTable = ({
  defenderData,
  onInputChange
}: Props) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>ディフェンダー</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">クラス</TableCell>
            <TableCell>
              <Select
                value={defenderData.dfClass}
                onValueChange={(value) => onInputChange("dfClass", value)}>
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
                  <SelectItem value="lahn">ラン</SelectItem>
                  <SelectItem value="sorceress">ソーサレス</SelectItem>
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
                  <SelectItem value="dosa">ドーサ</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">HP</TableCell>
            <TableCell>
              <Input
                type="number"
                name="hp"
                value={defenderData.hp}
                onChange={(e) => onInputChange("hp", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ダメ減%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="drRate"
                value={defenderData.drRate}
                onChange={(e) => onInputChange("drRate", Number(e.target.value))} />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">近接ダメ減</TableCell>
            <TableCell>
              <Input
                type="number"
                name="meleeDr"
                value={defenderData.meleeDr}
                onChange={(e) => onInputChange("meleeDr", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">近接回避</TableCell>
            <TableCell>
              <Input
                type="number"
                name="meleeEvasion"
                value={defenderData.meleeEvasion}
                onChange={(e) => onInputChange("meleeEvasion", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">近接回避%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="meleeEvasionRate"
                value={defenderData.meleeEvasionRate}
                onChange={(e) => onInputChange("meleeEvasionRate", Number(e.target.value))}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">遠距離ダメ減</TableCell>
            <TableCell>
              <Input
                type="number"
                name="rangedDr"
                value={defenderData.rangedDr}
                onChange={(e) => onInputChange("rangedDr", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">遠距離回避</TableCell>
            <TableCell>
              <Input
                type="number"
                name="rangedEvasion"
                value={defenderData.rangedEvasion}
                onChange={(e) => onInputChange("rangedEvasion", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">遠距離回避%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="rangedEvasionRate"
                value={defenderData.rangedEvasionRate}
                onChange={(e) => onInputChange("rangedEvasionRate", Number(e.target.value))}
              />
              %
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">魔法ダメ減</TableCell>
            <TableCell>
              <Input
                type="number"
                name="magicDr"
                value={defenderData.magicDr}
                onChange={(e) => onInputChange("magicDr", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">魔法回避</TableCell>
            <TableCell>
              <Input
                type="number"
                name="magicEvasion"
                value={defenderData.magicEvasion}
                onChange={(e) => onInputChange("magicEvasion", Number(e.target.value))}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">魔法回避%</TableCell>
            <TableCell className="flex items-center justify-start gap-2">
              <Input
                type="number"
                name="magicEvasionRate"
                value={defenderData.magicEvasionRate}
                onChange={(e) => onInputChange("magicEvasionRate", Number(e.target.value))}
              />
              %
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default DefenderTable;