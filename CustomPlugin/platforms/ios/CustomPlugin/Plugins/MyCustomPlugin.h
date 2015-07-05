//
//  MyCustomPlugin.h
//  CustomPlugin
//
//  Created by srout on 05/07/15.
//
//

#import <Cordova/CDV.h>

@interface MyCustomPlugin : CDVPlugin

- (void) getCurrentDate:(CDVInvokedUrlCommand *)command;

@end
