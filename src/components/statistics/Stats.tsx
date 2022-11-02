import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
    setVigor,
    setMind,
    setEndurance,
    setStrength,
    setDexterity,
    setIntelligence,
    setFaith,
    setArcane,
    setClass,
    resetStats,
} from "./statsSlice";
import { startingStats } from "./startingClassStats";

const startingStatsKeys = Object.keys(startingStats);

export function Stats() {
    const {
        className,
        level,
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
        runesToLevel,
    } = useAppSelector((state: any) => state.stats);
    const dispatch = useAppDispatch();

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Class:</th>
                        <th>
                            <select
                                onChange={(e) =>
                                    dispatch(setClass(e.target.value))
                                }
                            >
                                {startingStatsKeys.map((stats) => (
                                    <option key={stats} value={stats}>
                                        {stats}
                                    </option>
                                ))}
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>Level</th>
                        <th>{level}</th>
                        <th>{className}</th>
                    </tr>
                    <tr>
                        <th>Vigor</th>
                        <th>{vigor}</th>
                        <th>
                            <button onClick={() => dispatch(setVigor(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setVigor(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Mind</th>
                        <th>{mind}</th>
                        <th>
                            <button onClick={() => dispatch(setMind(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setMind(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Endurance</th>
                        <th>{endurance}</th>
                        <th>
                            <button onClick={() => dispatch(setEndurance(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setEndurance(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <th>{strength}</th>
                        <th>
                            <button onClick={() => dispatch(setStrength(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setStrength(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Dexterity</th>
                        <th>{dexterity}</th>
                        <th>
                            <button onClick={() => dispatch(setDexterity(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setDexterity(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Intelligence</th>
                        <th>{intelligence}</th>
                        <th>
                            <button
                                onClick={() => dispatch(setIntelligence(1))}
                            >
                                +
                            </button>
                            <button
                                onClick={() => dispatch(setIntelligence(-1))}
                            >
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Faith</th>
                        <th>{faith}</th>
                        <th>
                            <button onClick={() => dispatch(setFaith(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setFaith(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Arcane</th>
                        <th>{arcane}</th>
                        <th>
                            <button onClick={() => dispatch(setArcane(1))}>
                                +
                            </button>
                            <button onClick={() => dispatch(setArcane(-1))}>
                                -
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>To Next Level:</th>
                        <td>{runesToLevel}</td>
                    </tr>

                    <tr>
                        <th>
                            <button onClick={() => dispatch(resetStats())}>
                                Reset
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
