import { useState } from "react";

function Counter() {
  let [hpPlayer, setHpPlayer] = useState(100);
  let [hpEnemy, setHpEnemy] = useState(100);
  let [lastDamageDealt, setLDD] = useState(0);
  let [lastDamageTaken, setLDT] = useState(0);

  const playerDamage = 10;
  const playerRegen = 5;
  const enemyDamage = 7;
  const enemyRegen = 5;

  function damageCalCulator(baseDamage) {
    const randomFactor = Math.random() * 0.5; //create a random factor between 0 and 0.5
    let damageAfterRandomFactor = 0;
    const criticalHitChance = 0.33; // chance for critical hit
    const criticalHitMultiplier = 2; // multiplier for critical hit
    let critDamage = 0;

    if (Math.random() < 0.5) {
      damageAfterRandomFactor = Math.floor(
        baseDamage - baseDamage * randomFactor,
      );
    } else {
      damageAfterRandomFactor = Math.floor(
        baseDamage + baseDamage * randomFactor,
      );
    }

    if (Math.random() < criticalHitChance) {
      critDamage = damageAfterRandomFactor * criticalHitMultiplier;
    }

    const finalDamage = damageAfterRandomFactor + critDamage;
    return finalDamage;
  }
  function heal() {
    setHpPlayer(function (prev) {
      return prev + playerRegen;
    });
    setHpEnemy(function (prev) {
      return prev + enemyRegen;
    });
  }

  function playerAttack() {
    setHpEnemy(function (prev) {
      return prev - damageCalCulator(playerDamage);
    });
    setHpPlayer(function (prev) {
      return prev - damageCalCulator(enemyDamage);
    });
  }

  return (
    <div className="row text-white container">
      <h1>Game</h1>
      <h5>Enemy HP : {hpEnemy}</h5>
      <h5>Your HP : {hpPlayer}</h5>
      <h6>Your Damage : {playerDamage}</h6>
      <h6>Last Damage Dealt : {lastDamageDealt}</h6>
      <h6>Last Damage Taken : {lastDamageDealt}</h6>

      <button className="btn btn-success m-2" onClick={() => heal()}>
        Heal
      </button>
      <button className="btn btn-danger m-2" onClick={() => playerAttack()}>
        Attack
      </button>
    </div>
  );
}

export default Counter;
