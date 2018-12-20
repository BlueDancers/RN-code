package com.pinduoduo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import cn.qiuxiang.react.geolocation.AMapGeolocationPackage;
import cn.jpush.reactnativejpush.JPushPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.pinduoduo.module.SharePackage;
import com.umeng.commonsdk.UMConfigure;
import com.umeng.socialize.Config;
import com.umeng.socialize.UMShareAPI;
import com.umeng.socialize.PlatformConfig;
import cn.jiguang.imui.messagelist.ReactIMUIPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactIMUIPackage(),
            new AMapGeolocationPackage(),
            new SharePackage(),
            new JPushPackage(!BuildConfig.DEBUG, !BuildConfig.DEBUG),
            new SplashScreenReactPackage(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    Config.shareType = "react native";  
    UMConfigure.init(this,"5c19c294f1f556eed200019f","umeng",UMConfigure.DEVICE_TYPE_PHONE,"");
  }
   // 配置平台key、secret信息
  {
    // PlatformConfig.setWeixin("微信Key", "微信Secret");
    // PlatformConfig.setQQZone("qq app id", "QQ Secret");
    // PlatformConfig.setSinaWeibo("微博key", "微博Secret", "www.baidu.com");
    PlatformConfig.setWeixin("wx083bf496cbc48aec", "750e9075fa521c82274a9d548c399825");
    PlatformConfig.setQQZone("1106207359", "3JjbG8aXMuh5w0sV");
    PlatformConfig.setSinaWeibo("2733400964", "fac50980a44e3e3afd4bc968ea572887", "www.baidu.com");
  }
}
