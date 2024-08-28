[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantGoogleSellersAdUrlResultInfo

# Class: MerchantGoogleSellersAdUrlResultInfo

## Implements

- [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersAdUrlResultInfo()

> **new MerchantGoogleSellersAdUrlResultInfo**(`data`?): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Defined in

main.ts:183443

## Properties

### ad\_aclk?

> `optional` **ad\_aclk**: `string`

unique ad click referral parameter

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_aclk`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_aclk)

#### Defined in

main.ts:183434

***

### ad\_url?

> `optional` **ad\_url**: `string`

full URL of the advertisement

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url)

#### Defined in

main.ts:183436

***

### ad\_url\_redirects?

> `optional` **ad\_url\_redirects**: `string`[]

URLs where the link from Google Shopping redirects before reaching a final URL
includes up to 10 URLs of the ad’s redirect path to the seller’s ad_url

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url_redirects`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url_redirects)

#### Defined in

main.ts:183439

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:183452

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:183475

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Defined in

main.ts:183468
