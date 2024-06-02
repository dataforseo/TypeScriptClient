**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleSellersAdUrlResultInfo

# Class: MerchantGoogleSellersAdUrlResultInfo

## Implements

- [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersAdUrlResultInfo(data)

> **new MerchantGoogleSellersAdUrlResultInfo**(`data`?): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Source

main.ts:177338

## Properties

### ad\_aclk?

> **`optional`** **ad\_aclk**: `string`

unique ad click referral parameter

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_aclk`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_aclk)

#### Source

main.ts:177329

***

### ad\_url?

> **`optional`** **ad\_url**: `string`

full URL of the advertisement

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url)

#### Source

main.ts:177331

***

### ad\_url\_redirects?

> **`optional`** **ad\_url\_redirects**: `string`[]

URLs where the link from Google Shopping redirects before reaching a final URL
includes up to 10 URLs of the ad’s redirect path to the seller’s ad_url

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url_redirects`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url_redirects)

#### Source

main.ts:177334

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:177347

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:177370

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Source

main.ts:177363
