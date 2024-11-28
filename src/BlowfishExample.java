import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class BlowfishExample {
    public static void main(String[] args) throws Exception {
        // Use a predefined key
        String keyString = "x!A%C*F-JaNdRgUk"; // Custom key
        SecretKey secretKey = new SecretKeySpec(keyString.getBytes(StandardCharsets.UTF_8), "Blowfish");

        // Print the custom secret key in Base64 format
        String secretKeyBase64 = Base64.getEncoder().encodeToString(secretKey.getEncoded());
        System.out.println("Custom Secret Key (Base64): " + secretKeyBase64);

        // Plain text to encrypt
        String plainText = "mule_usersout1";
        System.out.println("Plain Text: " + plainText);

        // Encrypt
        String encryptedText = encrypt(plainText, secretKey);
        System.out.println("Encrypted Text (Base64): " + encryptedText);

        // Decrypt
        String decryptedText = decrypt(encryptedText, secretKey);
        System.out.println("Decrypted Text: " + decryptedText);
    }

    // Encrypt method
    public static String encrypt(String plainText, SecretKey secretKey) throws Exception {
        System.out.println("Starting encryption...");
        Cipher cipher = Cipher.getInstance("Blowfish/ECB/PKCS5Padding"); // ECB with PKCS5 padding
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));
        System.out.println("Encryption complete.");
        return Base64.getEncoder().encodeToString(encryptedBytes); // Convert to Base64 for readability
    }

    // Decrypt method
    public static String decrypt(String encryptedText, SecretKey secretKey) throws Exception {
        System.out.println("Starting decryption...");
        Cipher cipher = Cipher.getInstance("Blowfish/ECB/PKCS5Padding"); // ECB with PKCS5 padding
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decodedBytes = Base64.getDecoder().decode(encryptedText); // Decode Base64
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);
        System.out.println("Decryption complete.");
        return new String(decryptedBytes, StandardCharsets.UTF_8); // Convert to string
    }
}
