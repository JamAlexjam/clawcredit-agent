const fs = require('fs');
const path = require('path');
const os = require('os');
const { ClawCredit } = require('@t54-labs/clawcredit-sdk');

const credPath = path.join(os.homedir(), '.openclaw', 'agents', 'default', 'agent', 'clawcredit.json');
const creds = JSON.parse(fs.readFileSync(credPath, 'utf-8'));

const credit = new ClawCredit({
  agentName: "MyAgent",
  apiToken: creds.apiToken
});

async function heartbeat() {
  const status = await credit.getPrequalificationStatus();
  console.log("Prequalification status:", status.prequalification_status);
  console.log("Credit issued:", status.credit_issued);
}

heartbeat().catch(console.error);
