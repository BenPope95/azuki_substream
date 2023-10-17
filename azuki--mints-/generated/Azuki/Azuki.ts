// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Azuki__getOwnershipDataResultValue0Struct extends ethereum.Tuple {
  get addr(): Address {
    return this[0].toAddress();
  }

  get startTimestamp(): BigInt {
    return this[1].toBigInt();
  }
}

export class Azuki__saleConfigResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getAuctionSaleStartTime(): BigInt {
    return this.value0;
  }

  getPublicSaleStartTime(): BigInt {
    return this.value1;
  }

  getMintlistPrice(): BigInt {
    return this.value2;
  }

  getPublicPrice(): BigInt {
    return this.value3;
  }

  getPublicSaleKey(): BigInt {
    return this.value4;
  }
}

export class Azuki extends ethereum.SmartContract {
  static bind(address: Address): Azuki {
    return new Azuki("Azuki", address);
  }

  AUCTION_DROP_INTERVAL(): BigInt {
    let result = super.call(
      "AUCTION_DROP_INTERVAL",
      "AUCTION_DROP_INTERVAL():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_AUCTION_DROP_INTERVAL(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "AUCTION_DROP_INTERVAL",
      "AUCTION_DROP_INTERVAL():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  AUCTION_DROP_PER_STEP(): BigInt {
    let result = super.call(
      "AUCTION_DROP_PER_STEP",
      "AUCTION_DROP_PER_STEP():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_AUCTION_DROP_PER_STEP(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "AUCTION_DROP_PER_STEP",
      "AUCTION_DROP_PER_STEP():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  AUCTION_END_PRICE(): BigInt {
    let result = super.call(
      "AUCTION_END_PRICE",
      "AUCTION_END_PRICE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_AUCTION_END_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "AUCTION_END_PRICE",
      "AUCTION_END_PRICE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  AUCTION_PRICE_CURVE_LENGTH(): BigInt {
    let result = super.call(
      "AUCTION_PRICE_CURVE_LENGTH",
      "AUCTION_PRICE_CURVE_LENGTH():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_AUCTION_PRICE_CURVE_LENGTH(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "AUCTION_PRICE_CURVE_LENGTH",
      "AUCTION_PRICE_CURVE_LENGTH():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  AUCTION_START_PRICE(): BigInt {
    let result = super.call(
      "AUCTION_START_PRICE",
      "AUCTION_START_PRICE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_AUCTION_START_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "AUCTION_START_PRICE",
      "AUCTION_START_PRICE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowlist(param0: Address): BigInt {
    let result = super.call("allowlist", "allowlist(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_allowlist(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("allowlist", "allowlist(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  amountForAuctionAndDev(): BigInt {
    let result = super.call(
      "amountForAuctionAndDev",
      "amountForAuctionAndDev():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_amountForAuctionAndDev(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "amountForAuctionAndDev",
      "amountForAuctionAndDev():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  amountForDevs(): BigInt {
    let result = super.call("amountForDevs", "amountForDevs():(uint256)", []);

    return result[0].toBigInt();
  }

  try_amountForDevs(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "amountForDevs",
      "amountForDevs():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAuctionPrice(_saleStartTime: BigInt): BigInt {
    let result = super.call(
      "getAuctionPrice",
      "getAuctionPrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_saleStartTime)]
    );

    return result[0].toBigInt();
  }

  try_getAuctionPrice(_saleStartTime: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAuctionPrice",
      "getAuctionPrice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_saleStartTime)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOwnershipData(tokenId: BigInt): Azuki__getOwnershipDataResultValue0Struct {
    let result = super.call(
      "getOwnershipData",
      "getOwnershipData(uint256):((address,uint64))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return changetype<Azuki__getOwnershipDataResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getOwnershipData(
    tokenId: BigInt
  ): ethereum.CallResult<Azuki__getOwnershipDataResultValue0Struct> {
    let result = super.tryCall(
      "getOwnershipData",
      "getOwnershipData(uint256):((address,uint64))",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Azuki__getOwnershipDataResultValue0Struct>(value[0].toTuple())
    );
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPublicSaleOn(
    publicPriceWei: BigInt,
    publicSaleKey: BigInt,
    publicSaleStartTime: BigInt
  ): boolean {
    let result = super.call(
      "isPublicSaleOn",
      "isPublicSaleOn(uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(publicPriceWei),
        ethereum.Value.fromUnsignedBigInt(publicSaleKey),
        ethereum.Value.fromUnsignedBigInt(publicSaleStartTime)
      ]
    );

    return result[0].toBoolean();
  }

  try_isPublicSaleOn(
    publicPriceWei: BigInt,
    publicSaleKey: BigInt,
    publicSaleStartTime: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isPublicSaleOn",
      "isPublicSaleOn(uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(publicPriceWei),
        ethereum.Value.fromUnsignedBigInt(publicSaleKey),
        ethereum.Value.fromUnsignedBigInt(publicSaleStartTime)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxPerAddressDuringMint(): BigInt {
    let result = super.call(
      "maxPerAddressDuringMint",
      "maxPerAddressDuringMint():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxPerAddressDuringMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxPerAddressDuringMint",
      "maxPerAddressDuringMint():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nextOwnerToExplicitlySet(): BigInt {
    let result = super.call(
      "nextOwnerToExplicitlySet",
      "nextOwnerToExplicitlySet():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_nextOwnerToExplicitlySet(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextOwnerToExplicitlySet",
      "nextOwnerToExplicitlySet():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numberMinted(owner: Address): BigInt {
    let result = super.call("numberMinted", "numberMinted(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_numberMinted(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberMinted",
      "numberMinted(address):(uint256)",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  saleConfig(): Azuki__saleConfigResult {
    let result = super.call(
      "saleConfig",
      "saleConfig():(uint32,uint32,uint64,uint64,uint32)",
      []
    );

    return new Azuki__saleConfigResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_saleConfig(): ethereum.CallResult<Azuki__saleConfigResult> {
    let result = super.tryCall(
      "saleConfig",
      "saleConfig():(uint32,uint32,uint64,uint64,uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Azuki__saleConfigResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get maxBatchSize_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get collectionSize_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountForAuctionAndDev_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountForDevs_(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AllowlistMintCall extends ethereum.Call {
  get inputs(): AllowlistMintCall__Inputs {
    return new AllowlistMintCall__Inputs(this);
  }

  get outputs(): AllowlistMintCall__Outputs {
    return new AllowlistMintCall__Outputs(this);
  }
}

export class AllowlistMintCall__Inputs {
  _call: AllowlistMintCall;

  constructor(call: AllowlistMintCall) {
    this._call = call;
  }
}

export class AllowlistMintCall__Outputs {
  _call: AllowlistMintCall;

  constructor(call: AllowlistMintCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class AuctionMintCall extends ethereum.Call {
  get inputs(): AuctionMintCall__Inputs {
    return new AuctionMintCall__Inputs(this);
  }

  get outputs(): AuctionMintCall__Outputs {
    return new AuctionMintCall__Outputs(this);
  }
}

export class AuctionMintCall__Inputs {
  _call: AuctionMintCall;

  constructor(call: AuctionMintCall) {
    this._call = call;
  }

  get quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AuctionMintCall__Outputs {
  _call: AuctionMintCall;

  constructor(call: AuctionMintCall) {
    this._call = call;
  }
}

export class DevMintCall extends ethereum.Call {
  get inputs(): DevMintCall__Inputs {
    return new DevMintCall__Inputs(this);
  }

  get outputs(): DevMintCall__Outputs {
    return new DevMintCall__Outputs(this);
  }
}

export class DevMintCall__Inputs {
  _call: DevMintCall;

  constructor(call: DevMintCall) {
    this._call = call;
  }

  get quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DevMintCall__Outputs {
  _call: DevMintCall;

  constructor(call: DevMintCall) {
    this._call = call;
  }
}

export class EndAuctionAndSetupNonAuctionSaleInfoCall extends ethereum.Call {
  get inputs(): EndAuctionAndSetupNonAuctionSaleInfoCall__Inputs {
    return new EndAuctionAndSetupNonAuctionSaleInfoCall__Inputs(this);
  }

  get outputs(): EndAuctionAndSetupNonAuctionSaleInfoCall__Outputs {
    return new EndAuctionAndSetupNonAuctionSaleInfoCall__Outputs(this);
  }
}

export class EndAuctionAndSetupNonAuctionSaleInfoCall__Inputs {
  _call: EndAuctionAndSetupNonAuctionSaleInfoCall;

  constructor(call: EndAuctionAndSetupNonAuctionSaleInfoCall) {
    this._call = call;
  }

  get mintlistPriceWei(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get publicPriceWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get publicSaleStartTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class EndAuctionAndSetupNonAuctionSaleInfoCall__Outputs {
  _call: EndAuctionAndSetupNonAuctionSaleInfoCall;

  constructor(call: EndAuctionAndSetupNonAuctionSaleInfoCall) {
    this._call = call;
  }
}

export class PublicSaleMintCall extends ethereum.Call {
  get inputs(): PublicSaleMintCall__Inputs {
    return new PublicSaleMintCall__Inputs(this);
  }

  get outputs(): PublicSaleMintCall__Outputs {
    return new PublicSaleMintCall__Outputs(this);
  }
}

export class PublicSaleMintCall__Inputs {
  _call: PublicSaleMintCall;

  constructor(call: PublicSaleMintCall) {
    this._call = call;
  }

  get quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get callerPublicSaleKey(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PublicSaleMintCall__Outputs {
  _call: PublicSaleMintCall;

  constructor(call: PublicSaleMintCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SeedAllowlistCall extends ethereum.Call {
  get inputs(): SeedAllowlistCall__Inputs {
    return new SeedAllowlistCall__Inputs(this);
  }

  get outputs(): SeedAllowlistCall__Outputs {
    return new SeedAllowlistCall__Outputs(this);
  }
}

export class SeedAllowlistCall__Inputs {
  _call: SeedAllowlistCall;

  constructor(call: SeedAllowlistCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get numSlots(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SeedAllowlistCall__Outputs {
  _call: SeedAllowlistCall;

  constructor(call: SeedAllowlistCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetAuctionSaleStartTimeCall extends ethereum.Call {
  get inputs(): SetAuctionSaleStartTimeCall__Inputs {
    return new SetAuctionSaleStartTimeCall__Inputs(this);
  }

  get outputs(): SetAuctionSaleStartTimeCall__Outputs {
    return new SetAuctionSaleStartTimeCall__Outputs(this);
  }
}

export class SetAuctionSaleStartTimeCall__Inputs {
  _call: SetAuctionSaleStartTimeCall;

  constructor(call: SetAuctionSaleStartTimeCall) {
    this._call = call;
  }

  get timestamp(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetAuctionSaleStartTimeCall__Outputs {
  _call: SetAuctionSaleStartTimeCall;

  constructor(call: SetAuctionSaleStartTimeCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetOwnersExplicitCall extends ethereum.Call {
  get inputs(): SetOwnersExplicitCall__Inputs {
    return new SetOwnersExplicitCall__Inputs(this);
  }

  get outputs(): SetOwnersExplicitCall__Outputs {
    return new SetOwnersExplicitCall__Outputs(this);
  }
}

export class SetOwnersExplicitCall__Inputs {
  _call: SetOwnersExplicitCall;

  constructor(call: SetOwnersExplicitCall) {
    this._call = call;
  }

  get quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetOwnersExplicitCall__Outputs {
  _call: SetOwnersExplicitCall;

  constructor(call: SetOwnersExplicitCall) {
    this._call = call;
  }
}

export class SetPublicSaleKeyCall extends ethereum.Call {
  get inputs(): SetPublicSaleKeyCall__Inputs {
    return new SetPublicSaleKeyCall__Inputs(this);
  }

  get outputs(): SetPublicSaleKeyCall__Outputs {
    return new SetPublicSaleKeyCall__Outputs(this);
  }
}

export class SetPublicSaleKeyCall__Inputs {
  _call: SetPublicSaleKeyCall;

  constructor(call: SetPublicSaleKeyCall) {
    this._call = call;
  }

  get key(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPublicSaleKeyCall__Outputs {
  _call: SetPublicSaleKeyCall;

  constructor(call: SetPublicSaleKeyCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawMoneyCall extends ethereum.Call {
  get inputs(): WithdrawMoneyCall__Inputs {
    return new WithdrawMoneyCall__Inputs(this);
  }

  get outputs(): WithdrawMoneyCall__Outputs {
    return new WithdrawMoneyCall__Outputs(this);
  }
}

export class WithdrawMoneyCall__Inputs {
  _call: WithdrawMoneyCall;

  constructor(call: WithdrawMoneyCall) {
    this._call = call;
  }
}

export class WithdrawMoneyCall__Outputs {
  _call: WithdrawMoneyCall;

  constructor(call: WithdrawMoneyCall) {
    this._call = call;
  }
}
