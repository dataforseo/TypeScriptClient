[Documentation](../README.md) / [Exports](../modules.md) / IAmazonDeliveryInfo

# Interface: IAmazonDeliveryInfo

## Implemented by

- [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [delivery\_date\_from](IAmazonDeliveryInfo.md#delivery_date_from)
- [delivery\_date\_to](IAmazonDeliveryInfo.md#delivery_date_to)
- [delivery\_message](IAmazonDeliveryInfo.md#delivery_message)
- [delivery\_price](IAmazonDeliveryInfo.md#delivery_price)
- [fastest\_delivery\_date\_from](IAmazonDeliveryInfo.md#fastest_delivery_date_from)
- [fastest\_delivery\_date\_to](IAmazonDeliveryInfo.md#fastest_delivery_date_to)

## Properties

### delivery\_date\_from

• `Optional` **delivery\_date\_from**: `string`

the earliest date when the product can be shipped

#### Defined in

main.ts:21210

___

### delivery\_date\_to

• `Optional` **delivery\_date\_to**: `string`

the latest date when the product can be delivered

#### Defined in

main.ts:21212

___

### delivery\_message

• `Optional` **delivery\_message**: `string`

message accompanying the delivery information as posted by the seller

#### Defined in

main.ts:21208

___

### delivery\_price

• `Optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Defined in

main.ts:21220

___

### fastest\_delivery\_date\_from

• `Optional` **fastest\_delivery\_date\_from**: `string`

the earliest date when the product can be delivered with a fast delivery option

#### Defined in

main.ts:21214

___

### fastest\_delivery\_date\_to

• `Optional` **fastest\_delivery\_date\_to**: `string`

the latest date when the product can be delivered with a fast delivery option

#### Defined in

main.ts:21216
