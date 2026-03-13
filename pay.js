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

async function pay() {
  const transactionResult = await credit.pay({
    transaction: {
      recipient: "https://merchant.example/x402/api/tool",
      amount: 5.00,
      chain: "BASE",
      asset: "USDC"
    },
    request_body: {
      http: {
        url: "https://merchant.example/x402/api/tool",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        timeout_s: 30
      },
      body: {
        service_name: "PremiumSearch",
        params: { query: "latest crypto prices" }
      }
    }
  });

  console.log("Payment result:", transactionResult);
}

pay().catch(console.error);
