use crate::{
    pb::schema::{Approvals, Transfers, Mints},
    ADDRESS,
};
use substreams::Hex;
use substreams_entity_change::tables::Tables;

pub fn mints_to_table_changes(tables: &mut Tables, mints: &Mints) {
    for mint in mints.mints.iter() {
        // handle the transfer
        let key = format!("{}-{}", mint.tx_hash, mint.token_id);
        let row = tables.update_row("Mint", key);
        //row.set("from", &mint.from);
        row.set("owner", &mint.owner);
        row.set("tokenId", &mint.token_id);
        row.set("txHash", &mint.tx_hash);

        // handle the accounts
        //tables.create_row("Account", &transfer.from);
        //tables.create_row("Account", &transfer.to);

        // handle updating the token owner
        tables
            .update_row("Token", format!("{}", &mint.token_id))
            .set("collection", ADDRESS.to_string())
            .set("owner", &mint.owner);
    }
}

pub fn approvals_to_table_changes(tables: &mut Tables, approvals: &Approvals) {
    for approval in approvals.approvals.iter() {
        // handle the approval
        let key = format!("{}-{}", &approval.tx_hash, approval.token_id);
        let row = tables.update_row("Approval", key);
        row.set("owner", &approval.owner);
        row.set("approved", &approval.approved);
        row.set("tokenId", &approval.token_id);

        // handle creation of accounts
        tables.create_row("Account", &approval.owner);
        tables.create_row("Account", &approval.approved);
    }
}

pub fn format_hex(address: &[u8]) -> String {
    format!("0x{}", Hex(address).to_string())
}
