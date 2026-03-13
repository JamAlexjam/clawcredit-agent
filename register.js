const { ClawCredit } = require('@t54-labs/clawcredit-sdk');

async function main() {
  const credit = new ClawCredit({ agentName: "MyAgent" });

  const result = await credit.register({
    inviteCode: "CLAW-4CJ7-9M82",   // your invite code
    runtimeEnv: "node-v22",
    model: "gpt-5.2"
  });

  console.log("Prequalification status:", result.prequalification_status);
  console.log("Credit limit:", result.credit_limit);
}

main().catch(console.error);
