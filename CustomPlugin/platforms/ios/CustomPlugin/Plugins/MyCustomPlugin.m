//
//  MyCustomPlugin.m
//  CustomPlugin
//
//  Created by srout on 05/07/15.
//
//

#import "MyCustomPlugin.h"

@interface MyCustomPlugin()

@property (nonatomic, retain) NSString *listenerCallbackId;

@end

@implementation MyCustomPlugin

- (void) getCurrentDate:(CDVInvokedUrlCommand *)command {
    NSString *currentDate =[self getCurrentSystemDate];
    CDVPluginResult *pluginResult = [ CDVPluginResult resultWithStatus : CDVCommandStatus_OK
                                                       messageAsString : currentDate];
    
    // Execute sendPluginResult on this plugin's commandDelegate, passing in the instance of CDVPluginResult
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (NSString *) getCurrentSystemDate{
    NSLog(@"getCurrentSystemDate is invoked");
    NSDate *currDate = [NSDate date];
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc]init];
    [dateFormatter setDateFormat:@"dd.MM.YY HH:mm:ss"];
    NSString *dateString = [dateFormatter stringFromDate:currDate];
    return dateString;
}

- (void) onActionBindListener:(CDVInvokedUrlCommand *)command {
    NSLog(@"onActionBindListener is invoked");
    self.listenerCallbackId = command.callbackId;
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Success"];
    [pluginResult setKeepCallbackAsBool:true];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void) reportNativeEvent:(NSDictionary*)eventData {
    NSLog(@"reportEvent is invoked");
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:eventData];
    [pluginResult setKeepCallbackAsBool:true];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:self.listenerCallbackId];
}

@end
